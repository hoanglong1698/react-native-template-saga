import notifee, { AndroidImportance, EventType, EventDetail } from '@notifee/react-native'
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging'
import { useEffect } from 'react'
import { Alert, PermissionsAndroid, Platform } from 'react-native'

const DEFAULT_CHANNEL = {
  ID: 'general',
  NAME: 'General',
}

const requestFCMPermission = async () => {
  let authStatus = null

  if (Platform.OS === 'android') {
    authStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
  } else {
    authStatus = await messaging().requestPermission()
  }
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL ||
    authStatus === 'granted'

  if (enabled) {
    await notifee.createChannel({
      id: DEFAULT_CHANNEL.ID,
      name: DEFAULT_CHANNEL.NAME,
      importance: AndroidImportance.HIGH,
    })
    const fcmToken = await messaging().getToken()
    console.log('fcmToken', fcmToken)
  }

  // 1. checks if battery optimization is enabled
  const batteryOptimizationEnabled = await notifee.isBatteryOptimizationEnabled()
  if (batteryOptimizationEnabled) {
    // 2. ask your users to disable the feature
    Alert.alert(
      'Restrictions Detected',
      'To ensure notifications are delivered, please disable battery optimization for the app.',
      [
        // 3. launch intent to navigate the user to the appropriate screen
        {
          text: 'OK, open settings',
          onPress: async () => await notifee.openBatteryOptimizationSettings(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    )
  }
}

export const onMessageReceive = async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
  const { data } = remoteMessage

  await notifee.displayNotification({
    title: data?.title,
    body: data?.body,
    android: {
      channelId: DEFAULT_CHANNEL.ID,
      importance: AndroidImportance.HIGH,
      smallIcon: 'ic_small_icon',
      color: '#9c27b0',
      pressAction: {
        id: 'default',
      },
    },
  })
}

export const onPressNotification = async ({ type, detail }: { type: EventType; detail: EventDetail }) => {
  switch (type) {
    case EventType.DISMISSED:
      console.log('User dismissed notification', detail.notification)
      // do something when user dismissed notification
      break
    case EventType.PRESS:
      console.log('User pressed notification', detail.notification)
      // do something when user pressed notification
      break
  }
}

const usePushNotification = () => {
  useEffect(() => {
    requestFCMPermission()
    const unsubFirebaseOnMessage = messaging().onMessage(onMessageReceive)
    const unsubNotifeeForeground = notifee.onForegroundEvent(onPressNotification)

    notifee.getInitialNotification().then(initialNotification => {
      if (initialNotification) {
        console.log('Notification caused app to open from quit state:', initialNotification)
        // do something when notification caused app to open
      }
    })

    return () => {
      unsubFirebaseOnMessage()
      unsubNotifeeForeground()
    }
  }, [])
}

export default usePushNotification

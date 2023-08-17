/**
 * @format
 */

import notifee from '@notifee/react-native'
import messaging from '@react-native-firebase/messaging'
import { AppRegistry } from 'react-native'

import App from './App'
import { name as appName } from './app.json'

import { onMessageReceive, onPressNotification } from '@/Hooks'
import 'react-native-get-random-values'
import { connectConsoleToReactotron } from '@/Utils'

if (__DEV__) {
  import('@/Configs/ReactotronConfig').then(() => connectConsoleToReactotron())
}

messaging().setBackgroundMessageHandler(async remoteMessage => onMessageReceive(remoteMessage))
notifee.onBackgroundEvent(onPressNotification)

AppRegistry.registerComponent(appName, () => App)

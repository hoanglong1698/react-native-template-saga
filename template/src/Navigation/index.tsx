import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

import { SCREENS_NAME } from '@/Constants'
import { navigationRef } from '@/Utils'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  const onReady = () => RNBootSplash.hide({ fade: true })

  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS_NAME.AUTH_STACK} component={AuthStackNavigator} />
        <Stack.Screen name={SCREENS_NAME.MAIN_STACK} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

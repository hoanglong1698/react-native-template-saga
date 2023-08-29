import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { ScreensName } from '../NavigationHelpers'

import { LoginScreen } from '@/Screens'

const Stack = createNativeStackNavigator()

function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={ScreensName.Login} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreensName.Login} component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

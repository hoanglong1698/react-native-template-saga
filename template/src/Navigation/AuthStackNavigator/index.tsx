import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { SCREENS_NAME } from '@/Constants'
import { LoginScreen } from '@/Screens'

const Stack = createNativeStackNavigator()

function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={SCREENS_NAME.LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS_NAME.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

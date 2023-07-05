import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREENS_NAME } from '@/Constants'
import { LoginScreen } from '@/Screens'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={SCREENS_NAME.LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS_NAME.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack

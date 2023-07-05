import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen } from '@/Screens'
import { SCREENS_NAME } from '@/Constants'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={SCREENS_NAME.HOME} component={HomeScreen} />
      <BottomTab.Screen name={SCREENS_NAME.PROFILE} component={ProfileScreen} />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({})

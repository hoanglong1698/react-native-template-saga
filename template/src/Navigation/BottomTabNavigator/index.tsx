import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen } from '@/Screens'
import { SCREENS_NAME } from '@/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const tabBarIcon = ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    return (
      <View>
        <Ionicons name="home" />
      </View>
    )
  }

  const renderBottomTab = ({ name, component }: { name: string; component: any }) => {
    return (
      <BottomTab.Screen
        name={name}
        component={component}
        options={{
          tabBarIcon: tabBarIcon,
        }}
      />
    )
  }

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      {renderBottomTab({ name: SCREENS_NAME.HOME, component: HomeScreen })}
      {renderBottomTab({ name: SCREENS_NAME.PROFILE, component: ProfileScreen })}
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({})

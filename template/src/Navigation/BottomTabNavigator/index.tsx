import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen } from '@/Screens'
import { SCREENS_NAME } from '@/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, FontSize } from '@/Themes'
import { CText } from '@/Components'
import { useTheme } from '@/Hooks'
import { ITheme } from '@/Types'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const { theme } = useTheme()
  const styles = getStyles(theme)

  const tabBarIcon = ({ focused, label, iconName }: { focused: boolean; label: string; iconName: string }) => {
    const color = focused ? Colors[theme].primary : Colors.common.mischka

    return (
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={16} color={color} />
        <CText bold fontSize={FontSize.small} color={color} style={{ marginTop: 5 }}>
          {label}
        </CText>
      </View>
    )
  }

  const renderBottomTab = ({
    name,
    component,
    label,
    iconName,
  }: {
    name: string
    component: any
    label: string
    iconName: string
  }) => {
    return (
      <BottomTab.Screen
        name={name}
        component={component}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => tabBarIcon({ focused, label, iconName }),
          tabBarStyle: styles.tabBarStyle,
        }}
      />
    )
  }

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      {renderBottomTab({ name: SCREENS_NAME.HOME, component: HomeScreen, label: 'Home', iconName: 'home' })}
      {renderBottomTab({ name: SCREENS_NAME.PROFILE, component: ProfileScreen, label: 'Profile', iconName: 'person' })}
    </BottomTab.Navigator>
  )
}

const getStyles = (theme: ITheme) =>
  StyleSheet.create({
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
      backgroundColor: Colors[theme].background,
    },
  })

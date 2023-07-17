import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CButton, globalLoading } from '@/Components'
import { useTheme, useThemedStyles } from '@/Hooks'
import { ITheme } from '@/Types'
import { Colors } from '@/Themes'

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme()
  const styles = useThemedStyles(createStyles)

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CButton title="Show Modal" onPress={() => globalLoading.show()} />
      <CButton title={`Change Theme ${theme}`} style={styles.button} onPress={() => toggleTheme()} />
    </View>
  )
}

const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[theme]?.background,
      paddingHorizontal: 20,
    },
    textStyle: {
      color: Colors[theme]?.text,
    },
    button: {
      marginTop: 20,
    },
  })

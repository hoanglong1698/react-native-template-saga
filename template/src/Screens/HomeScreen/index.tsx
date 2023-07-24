import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

import { CButton, globalLoading } from '@/Components'
import { useTheme, useThemedStyles } from '@/Hooks'
import { Colors } from '@/Themes'
import { ITheme } from '@/Types'

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme()
  const styles = useThemedStyles(createStyles)
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{t('home:welcome')}</Text>
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

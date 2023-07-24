import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CText } from '@/Components'
import { useThemedStyles } from '@/Hooks'
import { Colors } from '@/Themes'
import { ITheme } from '@/Types'

interface Props {
  title: string
}

const Header = (props: Props) => {
  const { title } = props
  const styles = useThemedStyles(createStyles)

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.contentContainer}>
        <CText bold color={Colors.common.white}>
          {title}
        </CText>
      </View>
    </SafeAreaView>
  )
}

export default Header

const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors[theme].primary,
    },
    contentContainer: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

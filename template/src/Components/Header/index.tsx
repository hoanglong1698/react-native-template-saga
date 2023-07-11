import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/Themes'
import { CText } from '@/Components'

interface Props {
  title: string
}

const Header = (props: Props) => {
  const { title } = props

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.contentContainer}>
        <CText bold color={Colors.white}>
          {title}
        </CText>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  contentContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

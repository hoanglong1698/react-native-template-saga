import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/Themes'
import { CText } from '@/Components'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <CText bold textStyle={{ textAlign: 'center' }} color={Colors.white}>
          Abc
        </CText>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
})

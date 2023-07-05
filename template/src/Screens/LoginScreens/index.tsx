import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CButton } from '@/Components'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <CButton title="Login" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

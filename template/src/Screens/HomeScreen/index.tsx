import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CButton, globalLoading } from '@/Components'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CButton title="Show Modal" onPress={() => globalLoading.show()} />
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

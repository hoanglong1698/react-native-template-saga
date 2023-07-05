import { StyleSheet, Text, View, TextProps } from 'react-native'
import React from 'react'

interface Props extends TextProps {}

const CText: React.FC<Props> = props => {
  const { children } = props
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CText

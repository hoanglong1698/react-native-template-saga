import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, ViewProps } from 'react-native'
import React from 'react'

interface Props extends ViewProps {}

export default function DismissKeyboardView(props: Props) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})

import React from 'react'
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, ViewProps } from 'react-native'

interface Props extends ViewProps {}

export default function DismissKeyboardView(props: Props) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View {...props} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})

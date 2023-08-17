import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TextInputProps, ViewStyle } from 'react-native'

import { Colors, FontFamily } from '@/Themes'

interface Props extends Omit<TextInputProps, 'style'> {
  containerStyle?: ViewStyle
  inputStyle?: ViewStyle
}

const DEFAULT_HEIGHT = 50

const CTextInput: React.FC<Props> = props => {
  const { containerStyle, inputStyle, ...restProps } = props
  const [value, setValue] = useState('')

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput value={value} onChangeText={setValue} style={[styles.textInput, inputStyle]} {...restProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: DEFAULT_HEIGHT,
    borderWidth: 1,
    width: '100%',
    borderColor: Colors.common.catskillWhite,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textInput: {
    height: DEFAULT_HEIGHT,
    fontFamily: FontFamily.regular,
  },
})

export default CTextInput

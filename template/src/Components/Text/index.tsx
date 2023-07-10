import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import React from 'react'
import { FontFamily } from '@/Themes'

interface Props extends Omit<TextProps, 'style'> {
  bold?: boolean
  color?: string
  fontSize?: number
  textStyle?: TextStyle
}

const CText: React.FC<Props> = props => {
  const { bold = false, color, fontSize = 14, textStyle, children, ...restProps } = props

  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
        fontFamily: bold ? FontFamily.bold : FontFamily.regular,
        ...textStyle,
      }}
      {...restProps}>
      {children}
    </Text>
  )
}

export default CText

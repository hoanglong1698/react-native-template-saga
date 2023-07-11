import { Text, TextProps } from 'react-native'
import React from 'react'
import { FontFamily } from '@/Themes'

interface Props extends TextProps {
  bold?: boolean
  color?: string
  fontSize?: number
}

const CText: React.FC<Props> = props => {
  const { bold = false, color, fontSize = 14, style, children, ...restProps } = props

  return (
    <Text
      style={[{ fontFamily: bold ? FontFamily.bold : FontFamily.regular, color: color, fontSize: fontSize }, style]}
      {...restProps}>
      {children}
    </Text>
  )
}

export default CText

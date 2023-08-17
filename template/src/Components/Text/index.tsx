import React from 'react'
import { Text, TextProps } from 'react-native'

import { useTheme } from '@/Hooks'
import { Colors, FontFamily } from '@/Themes'

interface Props extends TextProps {
  bold?: boolean
  color?: string
  fontSize?: number
}

const CText: React.FC<Props> = props => {
  const { theme } = useTheme()
  const { bold = false, color = Colors[theme].text, fontSize = 14, style, children, ...restProps } = props

  return (
    <Text
      style={[{ fontFamily: bold ? FontFamily.bold : FontFamily.regular, color: color, fontSize: fontSize }, style]}
      {...restProps}>
      {children}
    </Text>
  )
}

export default CText

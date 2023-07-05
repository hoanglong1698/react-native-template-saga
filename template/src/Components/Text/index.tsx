import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'

interface Props extends TextProps {
  color?: string
}

const CText: React.FC<Props> = props => {
  const { color, children, ...restProps } = props

  return (
    <Text style={{ color: color, fontSize: 14 }} {...restProps}>
      {children}
    </Text>
  )
}

export default CText

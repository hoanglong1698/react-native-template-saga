import { StyleSheet, TouchableOpacityProps, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-scaling'
import { Colors, FontFamily, FontSize } from '@/Themes'
import { CText } from '@/Components'

interface Props extends TouchableOpacityProps {
  title: string
  style?: ViewStyle
}

const CButton: React.FC<Props> = props => {
  const { title = 'Button', style, ...restProps } = props
  return (
    <TouchableOpacity style={[styles.container, style]} {...restProps}>
      <CText style={styles.title}>{title}</CText>
    </TouchableOpacity>
  )
}

export default CButton

const styles = StyleSheet.create({
  container: {
    height: scale(48),
    width: '100%',
    paddingHorizontal: scale(20),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontFamily: FontFamily.bold,
    fontSize: FontSize.medium,
  },
})

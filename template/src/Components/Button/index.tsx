import { StyleSheet, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-scaling'
import { Colors, FontFamily, FontSize } from '@/Themes'
import { CText } from '@/Components'
import { ITheme } from '@/Types'
import { useThemedStyles } from '@/Hooks'

interface Props extends TouchableOpacityProps {
  title: string
}

const CButton: React.FC<Props> = props => {
  const { title = 'Button', style, ...restProps } = props
  const styles = useThemedStyles(createStyles)

  return (
    <TouchableOpacity style={[styles.container, style]} {...restProps}>
      <CText style={styles.title}>{title}</CText>
    </TouchableOpacity>
  )
}

export default CButton

const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      height: scale(48),
      width: '100%',
      paddingHorizontal: scale(20),
      backgroundColor: Colors[theme].primary,
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

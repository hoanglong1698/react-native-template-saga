import { StyleSheet, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-scaling'
import { COLORS } from '@/Themes'
import { CText } from '@/Components'

interface Props extends TouchableOpacityProps {
  title: string
}

const CButton: React.FC<Props> = props => {
  const { title = 'Button', ...restProps } = props
  return (
    <TouchableOpacity style={styles.container} {...restProps}>
      <CText color={'#fff'}>{title}</CText>
    </TouchableOpacity>
  )
}

export default CButton

const styles = StyleSheet.create({
  container: {
    height: scale(48),
    width: '100%',
    paddingHorizontal: scale(20),
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

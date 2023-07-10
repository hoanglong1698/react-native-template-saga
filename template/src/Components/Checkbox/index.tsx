import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '@/Themes'
import CText from '../Text'

interface Props {
  label: string
}

const Checkbox: React.FC<Props> = props => {
  const { label = 'Checkbox' } = props
  const [checked, setChecked] = useState(false)

  const onPress = () => setChecked(prev => !prev)

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress}>
      <View
        style={{
          ...styles.boxContainer,
          borderColor: checked ? Colors.primary : Colors.catskillWhite,
          backgroundColor: checked ? Colors.primary : Colors.white,
        }}>
        <Ionicons name="checkmark" size={20} color={'#fff'} />
      </View>

      <CText>{label}</CText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 10,
  },
})

export default Checkbox

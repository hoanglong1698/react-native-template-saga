import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal'

interface Props {}

export const modalRef = React.createRef()

export default function CModal() {
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)

  return (
    <Modal>
      <View>
        <Text>index</Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})

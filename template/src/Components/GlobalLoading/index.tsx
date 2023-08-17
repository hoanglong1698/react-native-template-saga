import React, { useImperativeHandle, useState } from 'react'
import { StyleSheet, View, Modal, StatusBar } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators'
import { scale } from 'react-native-size-scaling'

import { CText } from '@/Components'
import { Colors } from '@/Themes'

export const globalLoadingRef = React.createRef<any>()

export const globalLoading = {
  show: () => {
    globalLoadingRef?.current?.show()
  },
  hide: () => {
    globalLoadingRef?.current?.hide()
  },
}

const GlobalLoading = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  const showModal = () => setIsVisible(true)
  const hideModal = () => setIsVisible(false)

  useImperativeHandle(ref, () => {
    return { show: showModal, hide: hideModal }
  })

  return (
    <Modal visible={isVisible} transparent>
      <StatusBar backgroundColor={'rgba(0,0,0,0.6)'} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <UIActivityIndicator size={24} />
          </View>
          <CText style={styles.text}>Loading...</CText>
        </View>
      </View>
    </Modal>
  )
})
export default GlobalLoading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  contentContainer: {
    alignSelf: 'center',
    backgroundColor: Colors.common.white,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(278),
    height: scale(64),
    borderRadius: scale(6),
  },
  text: {
    marginLeft: 10,
  },
})

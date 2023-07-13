import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { CText, Header } from '@/Components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FontSize } from '@/Themes'
import { MENU_PROFILE } from '@/Constants'
import { TouchableOpacity } from 'react-native'

export default function ProfileScreen() {
  const onPressItem = () => {}
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity key={index.toString()} style={styles.itemContainer}>
        <CText bold fontSize={FontSize.medium} style={{ flex: 1 }}>
          {item.title}
        </CText>
        <Ionicons name="chevron-forward" size={24} />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Header title="Profile" />
      <FlatList data={MENU_PROFILE} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { CText, Header } from '@/Components'
import { MENU_PROFILE } from '@/Constants'
import { useThemedStyles } from '@/Hooks'
import { Colors, FontSize } from '@/Themes'
import { ITheme } from '@/Types'

export default function ProfileScreen() {
  const styles = useThemedStyles(createStyles)

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
    <View style={styles.container}>
      <Header title="Profile" />
      <FlatList data={MENU_PROFILE} renderItem={renderItem} />
    </View>
  )
}

const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme].background,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  })

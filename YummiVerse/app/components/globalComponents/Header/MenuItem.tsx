import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { useRecipesMenu } from '../../../context/RecipesMenuCtx'

interface IMenuItem {
  item: string
  index: number
}

const MenuItem = ({item, index }: IMenuItem) => {
  const {activeIndex, setActiveIndex} = useRecipesMenu()

  return (
    <View style={styles.menuLabelWrapper}>
      <TouchableOpacity onPress={() => setActiveIndex(index)}>
        <Text style={{fontWeight: activeIndex === index ? "700" : "400", ...styles.menuLabel}}>{item}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuItem
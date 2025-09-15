import { View, Text, TouchableOpacity, LayoutChangeEvent } from 'react-native'
import React from 'react'
import styles from "./styles"
import { useRecipesMenu } from '../../../core/context/RecipesMenuCtx'

interface IMenuItem {
  item: string
  index: number
  onLayout: (e: LayoutChangeEvent) => void
}

const MenuItem = ({item, index, onLayout}: IMenuItem) => {
  const {activeIndex, setActiveIndex} = useRecipesMenu()

  return (
    <View style={styles.menuLabelWrapper}  onLayout={onLayout}>
      <TouchableOpacity onPress={() => setActiveIndex(index)}>
        <Text style={{fontWeight: activeIndex === index ? "700" : "400", ...styles.menuLabel}}>{item}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuItem
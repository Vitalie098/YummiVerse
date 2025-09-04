import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getIcon } from '../../../../utils/renderIcons/RecipeDetailsServings'
import styles from "./styles"

interface IAddGroceryButton {
  mb?: number
  text: string
  withoutIcon?: boolean
  type: "light" | "dark"
}

const MarkAddButton = ({text, type, withoutIcon = false, mb}: IAddGroceryButton) => {
  return (
    <TouchableOpacity style={[styles.button, type === "light" && styles.buttonWhite, mb ? {marginBottom: mb} : null]}>
      {!withoutIcon && getIcon(type)}
      <Text style={[styles.text, type === "light" && styles.textBlack]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MarkAddButton
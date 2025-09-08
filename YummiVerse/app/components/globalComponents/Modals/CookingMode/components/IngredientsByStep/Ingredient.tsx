import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"

interface IIngredient {
  text: string
}

const Ingredient = ({text}: IIngredient) => {
  return (
    <View style={styles.ingredientWrapper}>
      <View style={styles.imageWrapper} />
      <Text style={styles.ingredientName}>{text}</Text>
    </View>
  )
}

export default Ingredient
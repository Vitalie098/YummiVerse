import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles.ts"

interface IIngredient {
  data: {name: string, quantity: string}
}

const Ingredient = ({data}: IIngredient) => {
  return (
    <View style={styles.ingredientWrapper}>
      <View style={styles.imageWrapper}/>

      <View>
        <Text style={styles.ingredientName}>{data.name}</Text>
        <Text style={styles.quantity}>{data.quantity}</Text>
      </View>
    </View>
  )
}

export default Ingredient
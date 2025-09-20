import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import { getIcon, utensil } from '../../../../utils/renderIcons/RecipeDetailsUtensil'

interface IUtensils {
  utensilType: utensil
  text: string
  mr?: number
}

const Utensil = ({text, mr = 0, utensilType}: IUtensils) => {
  return (
    <View style={{...styles.utensilWrapper, marginRight: mr}}>
      {getIcon(utensilType)}
      <Text style={styles.utensilName}>{text}</Text>
    </View>
  )
}

export default Utensil
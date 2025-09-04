import { View, Text } from 'react-native'
import React from 'react'
import { getIcon, recipeContain } from '../../../../utils/renderIcons/RecipeDetailsInformation'
import styles from "./styles"

interface IRecipeContains {
  type: recipeContain
}

const RecipeContains = ({type}: IRecipeContains) => {
  return (
    <View style={styles.buttonWrapper}>
      {getIcon(type)}
      <Text style={styles.buttonText}>Gluten-free</Text>
    </View>
  )
}

export default RecipeContains
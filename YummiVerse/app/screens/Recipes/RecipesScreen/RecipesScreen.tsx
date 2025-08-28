import { View } from 'react-native'
import React from 'react'
import RecipesForYouContent from '../../../components/recipesComponents/ForYou/RecipesForYouContent'
import styles from './styles'

const RecipesScreen = () => {
  return (
    <View style={styles.container} >
      <RecipesForYouContent />
    </View>
  )
}

export default RecipesScreen;


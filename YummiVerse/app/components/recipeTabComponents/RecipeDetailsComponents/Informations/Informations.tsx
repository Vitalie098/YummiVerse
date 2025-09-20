import { Text, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import RecipeContains from './RecipeContains'
import { recipeContain } from '../../../../utils/renderIcons/RecipeDetailsInformation'

const rc: recipeContain[] = ["gluten", "lactose"]

const Informations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Ready to take your taste buds on a spice-filled adventure? This recipe is just the ticket.</Text>
      </View>
      
      <View style={styles.buttonsWrapper}>
        {rc.map((el, index) => <RecipeContains type={el} key={index} />)}
      </View>
    </View>
  )
}

export default Informations
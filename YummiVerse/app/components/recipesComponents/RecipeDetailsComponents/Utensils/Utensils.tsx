import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import Utensil from './Utensil'
import { utensil } from '../../../../utils/renderIcons/RecipeDetailsUtensil'

const utensilsData: utensil[] = ["beater", "spoon", "board", "beater", "spoon", "board"]

const Utensils = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utensils</Text>

      <View style={styles.utensilsWrapper}>
        {utensilsData.map((item, index) => <Utensil key={index} text={item} utensilType={item}/>)}
      </View>
    </View>
  )
}

export default Utensils
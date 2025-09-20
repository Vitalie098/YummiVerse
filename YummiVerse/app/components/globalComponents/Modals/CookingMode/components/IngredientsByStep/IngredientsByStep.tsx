import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from "./styles"
import Ingredient from './Ingredient'
import Utensil from '../../../../../recipeTabComponents/RecipeDetailsComponents/Utensils/Utensil'
import { utensil } from '../../../../../../utils/renderIcons/RecipeDetailsUtensil'

const ingredientsData = ["Aubergines", "Onions", "Olive oil"]
const utensilsData: utensil[]  = ["beater", "spoon", "board"]

const IngredientsByStep = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleTop}>Ingredients for this step</Text>
        <View style={styles.ingredientsWrapper}>
          <FlatList 
            bounces={false}
            //keyExtractor for real data
            data={ingredientsData}
            style={{maxHeight: 450}}
            contentContainerStyle={{gap: 8}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Ingredient text={item} />}
          />
        </View>
      </View>

      <View>
        <Text style={styles.titleFooter}>Utensils for this step</Text>
        <FlatList 
          data={utensilsData}
          //keyExtractor for real data
          renderItem={({item}) => <Utensil text={item} utensilType={item}/>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 8}}
          horizontal={true}
        />
      </View>
    </View>
  )
}

export default IngredientsByStep
import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from "./styles"
import Ingredient from './Ingredient'
import Counter from '../../../globalComponents/Counter'

const data = [{name: "Maggi Air Fryer", quantity: "27g" }, {name: "Aubergines", quantity: "2 large (around 400 g)" }, {name: "Tinned chickpeas", quantity: "240 g (drained weight 240 g)" }, {name: "Red pepper", quantity: "2 medium-sized, diced" }, {name: "Tomato Sauce", quantity: "2 medium-sized, diced" },{name: "Sugar", quantity: "1 pinch" },{name: "Black pepper", quantity: "1 pinch" },{name: "Olive oil", quantity: "1 tablespoon" } ]

interface IIngredients {
  ph?: number
}

const Ingredients = ({ph = 16}: IIngredients) => {
  return (
    <View style={[styles.container,  {paddingHorizontal: ph} ]}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>Servings</Text>
        <Counter containerStyles={styles.counterWrapper} textStyles={styles.counterText}/>
      </View>

      <View>
        <Text style={styles.subtitle}>{data.length} ingredients:</Text>

        <FlatList
          data={data}
          scrollEnabled={false}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({item}) => <Ingredient data={item}/>}
        />
      </View>
    </View>
  )
}

export default Ingredients
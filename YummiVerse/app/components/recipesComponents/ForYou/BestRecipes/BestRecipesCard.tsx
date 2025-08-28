import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./styles"
import { ContentBestRecipes } from '../../../../utils/fakeData/RecipesForYouScreenData'

interface IBestRecipesCard {
  item: ContentBestRecipes
  index: number
  onPress: () => void
}

const BestRecipesCard = ({index, item, onPress}: IBestRecipesCard) => {
  return (
    <View style={{...styles.container, marginLeft: index === 0 ? 17 : 0}}>
      <TouchableOpacity style={styles.containerCard} onPress={onPress}>
        <View style={styles.containerImage}>
          <Image source={item.image} style={styles.image} />
        </View>
      </TouchableOpacity>

      <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
    </View>
  )
}

export default BestRecipesCard
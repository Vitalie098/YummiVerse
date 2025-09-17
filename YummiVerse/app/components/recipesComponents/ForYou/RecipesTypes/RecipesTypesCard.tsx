import { ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import RecipeCardHeader from '../RecipeCardHeader'
import CardBottomDetails from '../CardBottomDetails/CardBottomDetails'
import { Content } from '../../../../utils/fakeData/RecipesForYouScreenData'

interface IRecipesTypesCard {
  index: number
  data: Content
  onPress: () => void
}

const RecipesTypesCard = ({data, index, onPress}: IRecipesTypesCard) => {
  return (
    <TouchableOpacity 
      style={{...styles.containerCard, marginLeft: index === 0 ? 17 : 0}}
      onPress={onPress}
    >
      <ImageBackground 
        source={data.image} 
        style={styles.imageBackground} 
        resizeMode='cover'
      >
        <View style={styles.footerContainer}>
          <RecipeCardHeader />
          <CardBottomDetails title={data.title}/>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default RecipesTypesCard
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import RecipeCardHeader from '../RecipeCardHeader'
import CardBottomDetails from '../CardBottomDetails/CardBottomDetails'
import { Content } from '../../../../../utils/fakeData/RecipesForYouScreenData'
import { RecipesNavigationProp } from '../../../../../core/navigation/types/RecipesNavigatorTypes'
import { useNavigation } from '@react-navigation/native'

interface IRecipesTypesCard {
  index: number
  data: Content
}

const RecipesTypesCard = ({data, index}: IRecipesTypesCard) => {
  const navigation = useNavigation<RecipesNavigationProp>()
  const onPress = () => navigation.navigate("RecipeDetails")

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
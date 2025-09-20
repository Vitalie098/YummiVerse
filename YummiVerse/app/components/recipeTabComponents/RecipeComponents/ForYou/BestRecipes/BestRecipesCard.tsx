import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { ContentBestRecipes } from '../../../../../utils/fakeData/RecipesForYouScreenData'
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native'
import { RecipesNavigationProp } from '../../../../../core/navigation/types/RecipesNavigatorTypes'

interface IBestRecipesCard {
  item: ContentBestRecipes
  index: number
}

const BestRecipesCard = ({index, item}: IBestRecipesCard) => {
  const navigation = useNavigation<RecipesNavigationProp>()
  const onPress = () => navigation.navigate("CommunityStories")
  
  return (
    <View style={{...styles.container, marginLeft: index === 0 ? 17 : 0}}>
      <TouchableOpacity style={styles.containerCard} onPress={onPress}>
        <View style={styles.containerImage}>
          <FastImage source={item.image} style={styles.image} />
        </View>
      </TouchableOpacity>

      <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
    </View>
  )
}

export default BestRecipesCard
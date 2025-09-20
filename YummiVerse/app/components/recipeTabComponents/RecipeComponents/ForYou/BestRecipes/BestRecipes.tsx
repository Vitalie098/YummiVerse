import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from "./styles"
import BestRecipesCard from './BestRecipesCard'
import { ContentBestRecipes } from '../../../../../utils/fakeData/RecipesForYouScreenData'

interface IBestRecipes {
  title: string
  data: ContentBestRecipes[]
}

const BestRecipes = ({data, title}: IBestRecipes) => {
  return (
    <>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>

      <View style={styles.flatListWrapper}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainerStyle}
          renderItem={({item, index}) => <BestRecipesCard index={index} item={item} />}
        />
      </View>
    </>
  )
}

export default BestRecipes
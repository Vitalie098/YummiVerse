import { View, FlatList } from 'react-native'
import React from 'react'
import RecipesTypesCard from './RecipesTypesCard'
import { Content } from '../../../../utils/fakeData/RecipesForYouScreenData'
import styles from "./styles"
import RecipeSectionHeader from '../RecipeSectionHeader'

interface RecipesTypesInterface {
  text: string
  data: Content[]
  onPress: () => void
}

const RecipesTypes = ({text, data, onPress}: RecipesTypesInterface) => {
  return (
    <View style={styles.container}>
      <View style={[styles.headerWrapper]}>
        <RecipeSectionHeader text={text} onPress={() => {}} />
      </View>
      
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainerStyle}
        renderItem={({item, index}) => <RecipesTypesCard index={index} data={item} onPress={onPress}/>}
      />   
    </View>
  )
}

export default RecipesTypes
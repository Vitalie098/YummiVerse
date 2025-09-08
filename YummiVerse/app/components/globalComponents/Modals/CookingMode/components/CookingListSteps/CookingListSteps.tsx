import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import styles from './styles';
import RecipeTitle from '../RecipeTitle'
import Step from '../Step'
import { RecipesNavigationRouteProp } from '../../../../../../core/navigation/types/RecipesNavigatorTypes'
import { cookingListStepsData } from '../../../../../../utils/fakeData/CookingListSteps'

const CookingListSteps = () => {
  const { currentIndex } = useRoute<RecipesNavigationRouteProp>().params
  const insets = useSafeAreaInsets()
  
  return (
    <View style={{...styles.container, paddingTop: insets.top}}>
      <RecipeTitle type="back" isLightMode={false} />

      <FlatList
        data={cookingListStepsData}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item, index}) => <Step data={item} index={index} isCurrentStep={currentIndex === index}/>}
      />
    </View>
  )
}

export default CookingListSteps
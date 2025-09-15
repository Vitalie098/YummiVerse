import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BestRecipes from '../BestRecipes'
import RecipesTypes from '../RecipesTypes'
import BalancedEatingPrompt from '../MenuPlanPromoCard'
import { useTranslation } from 'react-i18next'
import styles from "./styles"
import { recipesForYouData as data } from '../../../../utils/fakeData/RecipesForYouScreenData'
import SwipeableCards from '../SwipeableCards'
import { useNavigation } from '@react-navigation/native'
import { RecipesNavigationProp } from '../../../../core/navigation/types/RecipesNavigatorTypes'
import Animated, { ScrollHandlerProcessed } from 'react-native-reanimated'

const RecipesForYouContent = ({scrollHandler}: {scrollHandler: ScrollHandlerProcessed<Record<string, unknown>>}) => {
  const navigation = useNavigation<RecipesNavigationProp>()
  const insets = useSafeAreaInsets()
  const {t} = useTranslation();

  const goToRecipeDetails = () => navigation.navigate("RecipeDetails")
 
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}  
      scrollEventThrottle={1}
      onScroll={scrollHandler}
      bounces={false}
    >
      <View style={{...styles.container, paddingBottom: insets.bottom}}>
        <SwipeableCards data={data.help} />
        <BestRecipes title={t('recipes.best')} data={data.bestRecipes} />
        <RecipesTypes text={t('recipes.breakfast')} data={data.breakfast} onPress={goToRecipeDetails}/>
        <RecipesTypes text={t('recipes.international')} data={data.international} onPress={goToRecipeDetails}/>
        <RecipesTypes text={t('recipes.scaryTreats')} data={data.scary} onPress={goToRecipeDetails}/>
        <BalancedEatingPrompt />
      </View>
    </Animated.ScrollView>
  )
}

export default RecipesForYouContent
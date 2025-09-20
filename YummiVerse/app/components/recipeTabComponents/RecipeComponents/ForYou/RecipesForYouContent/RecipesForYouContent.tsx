import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BestRecipes from '../BestRecipes'
import RecipesTypes from '../RecipesTypes'
import BalancedEatingPrompt from '../MenuPlanPromoCard'
import { useTranslation } from 'react-i18next'
import styles from "./styles"
import { recipesForYouData as data } from '../../../../../utils/fakeData/RecipesForYouScreenData'
import SwipeableCards from '../SwipeableCards'
import Animated, { ScrollHandlerProcessed } from 'react-native-reanimated'

const RecipesForYouContent = ({scrollHandler}: {scrollHandler: ScrollHandlerProcessed<Record<string, unknown>>}) => {
  const insets = useSafeAreaInsets()
  const {t} = useTranslation();
 
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
        <RecipesTypes text={t('recipes.breakfast')} data={data.breakfast} />
        <RecipesTypes text={t('recipes.international')} data={data.international} />
        <RecipesTypes text={t('recipes.scaryTreats')} data={data.scary} />
        <BalancedEatingPrompt />
      </View>
    </Animated.ScrollView>
  )
}

export default RecipesForYouContent
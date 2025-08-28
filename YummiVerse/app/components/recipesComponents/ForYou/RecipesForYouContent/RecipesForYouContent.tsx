import { View, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BestRecipes from '../BestRecipes'
import RecipesTypes from '../RecipesTypes'
import BalancedEatingPrompt from '../MenuPlanPromoCard'
import { useTranslation } from 'react-i18next'
import styles from "./styles"
import { recipesForYouData as data } from '../../../../utils/fakeData/RecipesForYouScreenData'

const RecipesForYouContent = () => {
  const insets = useSafeAreaInsets()
  const {t} = useTranslation();

  const onPress = () => {}
 
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}  
      scrollEventThrottle={1}
      bounces={false}
    >
      <View style={{...styles.container, paddingBottom: insets.bottom}}>
        <BestRecipes title={t('recipes.best')} data={data.bestRecipes} onPress={onPress}/>
        <RecipesTypes text={t('recipes.breakfast')} data={data.breakfast} onPress={onPress}/>
        <RecipesTypes text={t('recipes.international')} data={data.international} onPress={onPress}/>
        <RecipesTypes text={t('recipes.scaryTreats')} data={data.scary} onPress={onPress}/>
        <BalancedEatingPrompt />
      </View>
    </ScrollView>
  )
}

export default RecipesForYouContent
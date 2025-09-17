import React from 'react'
import RecipesForYouContent from '../../../components/recipesComponents/ForYou/RecipesForYouContent'
import styles from './styles'
import useAnimatedScreen from '../../../helpers/hooks/useAnimatedScreen'
import Animated from 'react-native-reanimated'
import { useRecipesMenu } from '../../../core/context/RecipesMenuCtx'
import RecipesAllContent from '../../../components/recipesComponents/All/RecipesAllContent'

const RecipesScreen = () => {
  const {animatedScreenTranslate, scrollHandler} = useAnimatedScreen()
  const {activeIndex} = useRecipesMenu()

  return (
    <Animated.View style={[styles.container, animatedScreenTranslate]}>
      {activeIndex === 0 && <RecipesForYouContent scrollHandler={scrollHandler}/>}
      {activeIndex === 1 && <RecipesAllContent scrollHandler={scrollHandler}/>}  
    </Animated.View>
  )
}

export default RecipesScreen;


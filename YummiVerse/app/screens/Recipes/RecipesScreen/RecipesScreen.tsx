import React from 'react'
import RecipesForYouContent from '../../../components/recipesComponents/ForYou/RecipesForYouContent'
import styles from './styles'
import useAnimatedScreen from '../../../helpers/hooks/useAnimatedScreen'
import Animated from 'react-native-reanimated'

const RecipesScreen = () => {
  const {animatedScreenTranslate, scrollHandler} = useAnimatedScreen()

  return (
    <Animated.View style={[styles.container, animatedScreenTranslate]}>
      <RecipesForYouContent scrollHandler={scrollHandler}/>
    </Animated.View>
  )
}

export default RecipesScreen;


import React, { useCallback, useRef, useState } from 'react'
import { LayoutChangeEvent } from 'react-native'
import Animated from 'react-native-reanimated'
import Header from '../../../components/recipeTabComponents/RecipeDetailsComponents/Header'
import AbsoluteMenu from '../../../components/recipeTabComponents/RecipeDetailsComponents/AbsoluteMenu'
import styles from './styles'
import useAnimatedRecipesDetails from '../../../helpers/hooks/useAnimatedRecipesDetails'
import BottomSheet from '@gorhom/bottom-sheet'
import BlurScreen from '../../../components/globalComponents/BlurScreen/BlurScreen'
import RecipesDetailsBottomSheet from '../../../components/recipeTabComponents/RecipeDetailsComponents/RecipesDetailsBottomSheet'
import { absoluteMenyHeight } from '../../../utils/global/globalValues'
import { recipesDetailsMenu } from '../../../utils/header/headerProperties'
import Content from '../../../components/recipeTabComponents/RecipeDetailsComponents/Content/Content'

const RecipeDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showBlur, setShowBlur] = useState(false)

  const layoutSection = useRef<number[]>([])
  const bottomSheetRef = useRef<BottomSheet>(null)
  const scrollRef = useRef<Animated.ScrollView>(null)
  const layoutMenu = useRef<{ x: number; width: number }[]>([])
 
  const {onScroll, opacityStyle, headerTranslateStyle, requestStop} = useAnimatedRecipesDetails
  ({layoutSection: layoutSection.current, activeIndex,setActiveIndex})

  const handleLayoutSection = useCallback((event: LayoutChangeEvent) => { 
    layoutSection.current = [...layoutSection.current, event.nativeEvent.layout.y - absoluteMenyHeight]
   }, [])

  const handleLayoutMenu = useCallback((event: LayoutChangeEvent) => {
    if (layoutMenu.current.length === recipesDetailsMenu.length) return
    layoutMenu.current = [...layoutMenu.current, { x: event.nativeEvent.layout.x, width: event.nativeEvent.layout.width}]
  }, [])

  const goTo = useCallback((index: number) => {
    requestStop()

    const y: number = layoutSection.current[index] ?? 0;
    scrollRef.current?.scrollTo?.({ y, animated: true })

    setActiveIndex(index)
  }, [requestStop])

  const openBottomSheetHandler = useCallback(() => {
    setShowBlur(true)
    bottomSheetRef.current?.expand()
  }, [])

  const onAnimateBTS = useCallback((_: number, toIndex: number) => {
    if (toIndex === -1) setShowBlur(false)
  }, [])

  const closeBottomSheetHandler = useCallback(() => {
    setShowBlur(false)
    bottomSheetRef.current?.close()
  }, [])

  return (
    <>
      <Animated.ScrollView
        bounces={false}
        ref={scrollRef}
        style={styles.container}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}             
        scrollEventThrottle={16}
      >
        <Header
          goTo={goTo}
          layout={layoutMenu.current}
          opacityStyle={opacityStyle}          
          openBottomSheetHandler={openBottomSheetHandler}
        />
          
        <Content handleLayout={handleLayoutSection}/>
      </Animated.ScrollView>

      <AbsoluteMenu
        goTo={goTo}
        layout={layoutMenu.current}
        activeIndex={activeIndex}
        handleLayout={handleLayoutMenu}
        animatedHeaderRecipesDetailsTranslate={headerTranslateStyle} 
      />

      {showBlur && <BlurScreen />}
      <RecipesDetailsBottomSheet
        ref={bottomSheetRef}
        closeBottomSheetHandler={closeBottomSheetHandler}
        onAnimate={onAnimateBTS}
      />
    </>
  )
}

export default RecipeDetails

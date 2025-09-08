import { Animated, ImageBackground, LayoutChangeEvent, ScrollView, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../../components/recipesComponents/RecipeDetailsComponents/Header';
import Informations from '../../../components/recipesComponents/RecipeDetailsComponents/Informations';
import Servings from '../../../components/recipesComponents/RecipeDetailsComponents/Servings';
import Instructions from '../../../components/recipesComponents/RecipeDetailsComponents/Instructions';
import Comments from '../../../components/recipesComponents/RecipeDetailsComponents/Comments';
import AbsoluteMenu from '../../../components/recipesComponents/RecipeDetailsComponents/AbsoluteMenu';
import styles from "./styles"
import useAnimatedRecipesDetails from '../../../helpers/hooks/useAnimatedRecipesDetails';
import BottomSheet from '@gorhom/bottom-sheet';
import BlurScreen from '../../../components/globalComponents/BlurScreen/BlurScreen';
import RecipesDetailsBottomSheet from '../../../components/recipesComponents/RecipeDetailsComponents/RecipesDetailsBottomSheet';
import { absoluteMenyHeight } from '../../../utils/global/globalValues';

const RecipeDetails = () => {
  const [layoutMenu, setLayoutMenu] = useState<{x: number, width: number}[]>([])
  const [layoutSection, setLayoutSection] = useState<number[]>([])
  const [stopAnimated, setStopAnimated] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showBlur, setShowBlur] = useState(false)

  const bottomSheetRef = useRef<BottomSheet>(null)
  const scrollRef = useRef<ScrollView>(null)
  const inputRef = useRef<TextInput>(null)
  const timeOut = useRef<any>(null)

  const {handleScroll, opacityView, animatedHeaderRecipesDetailsTranslate} = useAnimatedRecipesDetails()

  const handleLayoutSection = (event: LayoutChangeEvent) => {
    event.persist()

    if(layoutSection.length === 3) return
    setLayoutSection(prev => [...prev, event.nativeEvent.layout.y - absoluteMenyHeight])
  }

  const handleLayoutMenu = (event: LayoutChangeEvent)=> {
    event.persist()

    if(layoutMenu.length === 3) return
    setLayoutMenu(prev => [...prev, {x: event.nativeEvent.layout.x, width: event.nativeEvent.layout.width}])
  }

  const goTo = (index: number) => {
    scrollRef.current?.scrollTo({y: layoutSection[index], animated: true})

    if(timeOut.current) {
      clearTimeout(timeOut.current)
      timeOut.current = null
    }

    setActiveIndex(index)
    !stopAnimated && setStopAnimated(true)
  }

  const stopAnimatedMenu = () => {
    if(stopAnimated && !timeOut.current) {
      timeOut.current = setTimeout(() => {
        setStopAnimated(false)
        timeOut.current = null
      }, 500)

      return true
    }else if(timeOut.current) return true
    
    return false
  }

  const openBottomSheetHandler = () => {
    setShowBlur(true)
    bottomSheetRef.current?.expand()
  }

  const onChangeBTSHandler = (index: number) => {
    if(index === -1) setShowBlur(false)
  }

  const closeBottomSheetHandler = () => {
    setShowBlur(false)
    bottomSheetRef.current?.close()
  }

  return (
    <>
      <Animated.ScrollView 
        bounces={false}
        ref={scrollRef} 
        style={styles.container} 
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll(activeIndex, layoutSection, setActiveIndex, stopAnimatedMenu)} 
      >
        <Header  
          goTo={goTo} 
          layout={layoutMenu}
          activeIndex={activeIndex} 
          opacityView={opacityView} 
          openBottomSheetHandler={openBottomSheetHandler}
        />
        <Informations />
        <Servings handleLayout={handleLayoutSection} />
        <Instructions handleLayout={handleLayoutSection}/>
        <Comments handleLayout={handleLayoutSection} inputRef={inputRef}/>
      </Animated.ScrollView>

      <AbsoluteMenu 
        goTo={goTo}
        layout={layoutMenu}
        activeIndex={activeIndex}
        handleLayoutMenu={handleLayoutMenu}
        animatedHeaderRecipesDetailsTranslate={animatedHeaderRecipesDetailsTranslate}  
      />

      {showBlur && <BlurScreen />}
      <RecipesDetailsBottomSheet ref={bottomSheetRef} closeBottomSheetHandler={closeBottomSheetHandler} onChange={onChangeBTSHandler}/>
    </> 
  )
}

export default RecipeDetails
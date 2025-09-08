import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';
import { RecipesNavigationProp } from '../../../../core/navigation/types/RecipesNavigatorTypes';
import BlurScreen from '../../BlurScreen/BlurScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import IngredientsByStep from './components/IngredientsByStep';
import Ingredients from '../../../recipesComponents/RecipeDetailsComponents/Ingredients';
import CookingModeBottomSheet from './components/CookingModeBottomSheet';
import { actionButton, getColor } from '../../../../utils/renderIcons/CookingMode';

const numberOfSlides = 5

const CookingMode = () => {
  const [bottomSheetContent, setBottomSheetContent] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBlur, setShowBlur] = useState(false)

  const navigation = useNavigation<RecipesNavigationProp>()
  const insets = useSafeAreaInsets()

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSlideNavigationHandler = (type: actionButton) => {
    if(type === "prev") {
      setCurrentIndex(prev => prev - 1)
    }else {
      if(currentIndex === numberOfSlides - 1) {
        navigation.push("Congrats", {type: "congrats"})
        return
      }
      setCurrentIndex(prev => prev + 1) 
    }
  }

  const expandBottomSheet = (variant: number) => {
    setShowBlur(true)
    setBottomSheetContent(variant)
    setTimeout(() => bottomSheetRef.current?.expand(), 150)
  }

  const onChangeBTS = (index: number) => { if(index === -1) setShowBlur(false) }
  const isLightMode = () => currentIndex % 2 === 1
  
  return (
    <View style={[{...styles.container, backgroundColor: getColor(!isLightMode()),paddingTop: insets.top}]}>
      <Header 
        currentIndex={currentIndex} 
        isLightMode={isLightMode()} 
        numberOfSlides={numberOfSlides} 
        expandBottomSheet={expandBottomSheet} 
      />

      <Footer 
        currentIndex={currentIndex}
        isLightMode={isLightMode()}
        onPress={handleSlideNavigationHandler} 
        expandBottomSheet={expandBottomSheet} 
      />

      <View style={styles.absoluteButtonsWrapper}>
        <TouchableWithoutFeedback onPress={() => handleSlideNavigationHandler("prev")} disabled={currentIndex === 0}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleSlideNavigationHandler("next")}>
          <View style={{ flex: 1}} />
        </TouchableWithoutFeedback>
      </View>

      {showBlur && <BlurScreen />}

      <CookingModeBottomSheet ref={bottomSheetRef} onChange={onChangeBTS}>
        {bottomSheetContent === 1 && <IngredientsByStep /> }
        {bottomSheetContent === 2 && <Ingredients />}
      </CookingModeBottomSheet> 
    </View>
  )
};

export default CookingMode;

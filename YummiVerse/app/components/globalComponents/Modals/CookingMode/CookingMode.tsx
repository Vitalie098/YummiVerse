import { View } from 'react-native';
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
import Ingredients from '../../../recipeTabComponents/RecipeDetailsComponents/Ingredients';
import CookingModeBottomSheet from './components/CookingModeBottomSheet';
import { getColor } from '../../../../utils/renderIcons/CookingMode';

const numberOfSlides = 5

const CookingMode = () => {
  const [bottomSheetContent, setBottomSheetContent] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBlur, setShowBlur] = useState(false)

  const navigation = useNavigation<RecipesNavigationProp>()
  const insets = useSafeAreaInsets()

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSlideNavigationHandler = (goNext?: boolean) => {
    if (!goNext) {
      return setCurrentIndex((prev) => prev - 1);
    }

    if (currentIndex === numberOfSlides - 1) {
      return navigation.push("Congrats", { type: "congrats" });
    }

    setCurrentIndex((prev) => prev + 1);
  };

  const expandBottomSheet = (variant: number) => {
    setShowBlur(true)
    setBottomSheetContent(variant)
    setTimeout(() => bottomSheetRef.current?.expand(), 150)
  }

  const onAnimateBTS = (_: number, toIndex: number) => { 

    if(toIndex === -1) setShowBlur(false) 
  }
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

      {showBlur && <BlurScreen />}

      <CookingModeBottomSheet ref={bottomSheetRef} onAnimate={onAnimateBTS}>
        {bottomSheetContent === 1 && <IngredientsByStep /> }
        {bottomSheetContent === 2 && <Ingredients />}
      </CookingModeBottomSheet> 
    </View>
  )
};

export default CookingMode;

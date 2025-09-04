import { Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { absoluteMenyHeight } from '../../utils/global/globalValues';

const useAnimatedRecipesDetails = () => {
  const [animatedScreenTranslate, setAnimatedScreenTranslate] = useState(undefined)
  const [opacityView, setOpacityView] = useState(undefined)
  const [animatedHeaderRecipesDetailsTranslate, setAnimatedHeaderRecipesDetailsTranslate] = useState(undefined)

  const scrollY = useRef(new Animated.Value(0));

  useFocusEffect(
    React.useCallback(() => {

    const translateYMain: any = scrollY.current.interpolate({
        inputRange: [0, 50],
        outputRange: [-absoluteMenyHeight, -absoluteMenyHeight],
        extrapolate: "clamp"
      })

      const translateYHeaderMain: any = scrollY.current.interpolate({
        inputRange: [0, 560, 560.1],
        outputRange: [-150, -150, 0],
        extrapolate: "clamp"
      })

      const opacity: any = scrollY.current.interpolate({
        inputRange: [0, 500, 570],
        outputRange: [1, 1, 0],
        extrapolate: "clamp"
      })

      setOpacityView(opacity)
  
      setAnimatedHeaderRecipesDetailsTranslate(translateYHeaderMain)
      setAnimatedScreenTranslate(translateYMain)
    },[]) 
  );

  const handleScroll = (activeIndex: number, layoutSection: number[], setActiveIndex: React.Dispatch<React.SetStateAction<number>>, stopAnimatedMenu: () => boolean) => {
    return Animated.event([{
      nativeEvent: {
        contentOffset: {y: scrollY.current},
      }}],
      { 
        useNativeDriver: true,
        listener: (event: any) => {
          if(stopAnimatedMenu()) return
          const y = event.nativeEvent.contentOffset.y;

          const nextIdx = (() => {
            for (let i = layoutSection.length - 1; i >= 0; i--) {
              if (y >= layoutSection[i]) return i;
            }
            return 0; 
          })();

          nextIdx !== activeIndex && setActiveIndex(nextIdx);
        }
      }
    )
  }

  return {
    scrollY,
    handleScroll,
    opacityView,
    animatedScreenTranslate,
    animatedHeaderRecipesDetailsTranslate
  }
}

export default useAnimatedRecipesDetails

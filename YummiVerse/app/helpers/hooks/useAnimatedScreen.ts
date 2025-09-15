import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useScrollY } from '../../core/context/ScrollAnimationContext';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  Extrapolation,
  interpolate,
  clamp,
} from 'react-native-reanimated';

const MAX_SCROLL = 100;
const MIN_SCROLL = 0;

const useAnimatedScreen = () => {
  const { scrollY, scrollYAnimated, clampSourceScrollY } = useScrollY();

  const lastScrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;
      const diff = y - lastScrollY.value;
      lastScrollY.value = y;

      clampSourceScrollY.value = clamp(
        clampSourceScrollY.value + diff,
        MIN_SCROLL,
        MAX_SCROLL
      );

      scrollY.value = y;
      scrollYAnimated.value = y;
    },
  });

  useFocusEffect(
    React.useCallback(() => {
      scrollY.value = 0;
      scrollYAnimated.value = 0;
      clampSourceScrollY.value = 0;
      lastScrollY.value = 0;
    }, [])
  );

  const animatedScreenTranslate = useAnimatedStyle(() => {
    const translateY = interpolate(
      clampSourceScrollY.value,
      [0, MAX_SCROLL],
      [0, -50],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateY }],
    };
  });

  return {
    scrollHandler,
    animatedScreenTranslate,
  };
};

export default useAnimatedScreen;
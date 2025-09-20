import {
  useDerivedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { useScrollY } from '../../core/context/ScrollAnimationContext';

const useAnimatedHeader = () => {
  const { clampSourceScrollY } = useScrollY(); 

  const animatedHeaderTranslate = useDerivedValue(() => {
    return interpolate(
      clampSourceScrollY.value,
      [0, 100],
      [0, -50],
      Extrapolation.CLAMP
    );
  });

  const animatedHeaderOpacity = useDerivedValue(() => {
    return interpolate(
      clampSourceScrollY.value,
      [0, 100],
      [1, 0],
      Extrapolation.CLAMP
    );
  });

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animatedHeaderTranslate.value }]
  }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: animatedHeaderOpacity.value,
  }));

  return {
    containerAnimatedStyle,
    contentAnimatedStyle
  };
};

export default useAnimatedHeader;

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

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animatedHeaderTranslate.value }],
    opacity: animatedHeaderOpacity.value,
  }));

  return {
    headerAnimatedStyle,
  };
};

export default useAnimatedHeader;

import React from 'react'
import Animated, { SharedValue, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import { Path, Svg } from 'react-native-svg'
import { ViewStyle } from 'react-native';

const AnimatedSVG = Animated.createAnimatedComponent(Svg)

interface IAnimatedSvg {
  layout: any
  svgWidth: number
  decrease: number
  styles: ViewStyle
  isTabBar?: boolean
  activeIndex: number
  itemsLength: number
  svgViewBox: string | SharedValue<string | undefined> | undefined
}

const AnimatedSvg = ({layout, svgWidth, itemsLength, styles, isTabBar, decrease, activeIndex, svgViewBox}: IAnimatedSvg) => {
  const xOffset = useDerivedValue(() => {
    if (layout.length !== itemsLength) return 0
    const item = layout[activeIndex]

    if(isTabBar) return item.x - 15.5 

    return item.x + (item.width - decrease) / 2
  }, [activeIndex, layout])

  const animatedStyles = useAnimatedStyle(() => ({ transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }]}))
  return (
    <AnimatedSVG 
      width={svgWidth} 
      height={10}
      viewBox={svgViewBox}
      style={[styles, animatedStyles]}
    >
      <Path
        fill="#fff"
        d="m40.483-.267 3.3-.026 3.591.002 3.806-.02c3.438-.018 6.876-.022 10.314-.024 2.151 0 4.302-.005 6.453-.01A8461.8 8461.8 0 0 1 90.48-.371c6.988.002 13.977-.02 20.965-.051 6.01-.026 12.02-.037 18.031-.036 3.586 0 7.17-.005 10.756-.026a1372.8 1372.8 0 0 1 12.006-.002l3.572-.034c10.124.077 16.038 3.25 23.69 9.52 5.978 4.74 11.708 9.026 19.5 10v1H1v-1l1.652-.445c7.464-2.22 12.974-6.06 19.184-10.653L24.75 5.75l2.672-2.016C31.74.83 35.29-.249 40.482-.267z"
      />
    </AnimatedSVG>
  )
}

export default AnimatedSvg
import{StyleProp, View, ViewStyle} from "react-native"
import Animated, {cancelAnimation, Easing, useAnimatedProps, useSharedValue, withTiming,} from "react-native-reanimated"
import Svg, { Path } from "react-native-svg"
import { svgPathProperties } from "svg-path-properties"
import React, { memo, useEffect, useMemo } from "react"
import { getCirclePath } from "../../../../../../helpers/functions/getCirclePath"

const AnimatedPath = Animated.createAnimatedComponent(Path)

interface AnimatedCircleProps  {
  width: number
  height: number
  radius: number
  duration: number
  isRunning: boolean
  strokeColor: string
  strokeWidth: number
  children: React.ReactNode
  strokeInactiveColor: string
  style?: StyleProp<ViewStyle>
}

const SvgAnimatedCircle = memo(({width, height, radius, strokeColor, strokeInactiveColor, strokeWidth, isRunning, duration, style, children}: AnimatedCircleProps) => {
  const d = getCirclePath(width / 2, width / 2, radius, 90) 
  
  const wRatio = strokeWidth ? 1 - strokeWidth / width : 1
  const hRatio = strokeWidth ? 1 - strokeWidth / height : 1

  const length = useMemo(() => {
    const properties = new svgPathProperties(d);
    return properties.getTotalLength();
  }, [d]);

  const animatedValue = useSharedValue(length)

  useEffect(() => {
    if(!isRunning) {
      cancelAnimation(animatedValue)
    }else {
      animatedValue.value = withTiming(-1, { duration: duration + 5000, easing: Easing.linear})
    }
  },[isRunning])

  const animatedProps = useAnimatedProps(() => ({ strokeDashoffset: animatedValue.value }))

  return (
    <View style={[style, { width, height }]}>
      <Svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
      >
        <Path
          d={d}
          originX={width / 2.5}
          originY={height / 2}
          scaleX={wRatio}
          scaleY={hRatio}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke={strokeInactiveColor}
          strokeLinejoin="miter"
          strokeMiterlimit={0}
        />
        <AnimatedPath
          d={d}
          originX={width / 2}
          originY={height / 2}
          scaleX={wRatio}
          scaleY={hRatio}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke={strokeColor}
          strokeDasharray={length}
          strokeLinejoin="miter"
          strokeMiterlimit={0}
          strokeLinecap="round"
          animatedProps={animatedProps}
        />
      </Svg>
      <View style={{position: "absolute"}}>
        {children}
      </View>
    </View>
  )
})

export default SvgAnimatedCircle
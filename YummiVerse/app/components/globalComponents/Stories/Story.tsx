import { FlatList } from 'react-native'
import React from 'react'
import Slide from './Slide'
import { screenWidth } from '../../../utils/global/globalValues'
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

const angle = Math.atan(screenWidth / (screenWidth / 2))

interface IStory {
  item: any
  index: number  
  active: boolean, 
  isScrolling: boolean,
  scrollX: SharedValue<number>
  flatListRef: React.RefObject<FlatList<any> | null>
}

const Story = ({item, index, scrollX, active, isScrolling, flatListRef}: IStory) => {
  const inputRange = [(index - 0.5) * screenWidth, index * screenWidth, (index + 0.5) * screenWidth]

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      scrollX.value,
      inputRange,
      [angle / 2, 0, -angle / 2]
    )

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5]
    )

    const translateX1 = interpolate(
      scrollX.value,
      inputRange,
      [-screenWidth / 2, 0, screenWidth / 2]
    )

    const translateX2 = interpolate(
      scrollX.value,
      inputRange,
      [screenWidth / 2, 0, -screenWidth / 2]
    )

    return {
      opacity,
      transform: [
        { perspective: screenWidth * 4 },
        { translateX: translateX1 },
        { rotateY: `${rotateY}rad` },
        { translateX: translateX2 },
      ],
    }
  })

  const onPrevNextSlide = (value: number) =>{
    flatListRef?.current?.scrollToOffset({
      offset: (index + value) * screenWidth,
      animated: true,
    })
  }
                
  return (
    <Animated.View style={animatedStyle}>
      <Slide
        item={item}
        index={index}
        active={active}
        isScrolling={isScrolling}
        onPrevNextSlide={onPrevNextSlide}
      />
    </Animated.View>
  )
}
export default Story
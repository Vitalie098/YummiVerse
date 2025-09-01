import { Animated, FlatList } from 'react-native'
import React from 'react'
import Slide from './Slide'
import { screenWidth } from '../../../utils/global/globalValues'

const angle = Math.atan(screenWidth / (screenWidth / 2))

interface IStory {
  item: any
  index: number
  scrollX: Animated.Value
  isScrolling: boolean,  
  active: boolean, 
  flatListRef: React.RefObject<FlatList<any> | null>
}

const Story = ({item, index, scrollX, active, isScrolling, flatListRef}: IStory) => {
  const inputRange = [(index - 0.5) * screenWidth, index * screenWidth, (index + 0.5) * screenWidth]

  const rotateY = scrollX.interpolate({
    inputRange,
    outputRange: [`${angle / 2}rad`, '0rad', `-${angle / 2}rad`],
  })
          
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  })

  const translateX1 = scrollX.interpolate({
    inputRange,
    outputRange: [-screenWidth / 2, 0, screenWidth / 2],
    extrapolate: 'clamp',
  })
          
  const translateX2 = scrollX.interpolate({
    inputRange,
    outputRange: [screenWidth / 2, 0, -screenWidth / 2],
    extrapolate: 'clamp',
  })

  const onPrevNextSlide = (value: number) =>{
    flatListRef?.current?.scrollToOffset({
      offset: (index + value) * screenWidth,
      animated: true,
    })
  }
                
  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          { perspective: screenWidth * 4},
          { translateX: translateX1 },
          { rotateY },
          { translateX: translateX2 }
        ]
      }}
    >
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
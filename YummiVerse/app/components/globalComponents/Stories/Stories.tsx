import { FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef, useState } from 'react'
import Story from './Story'
import { screenWidth } from '../../../utils/global/globalValues'
import { slides } from '../../../utils/fakeData/Stories'
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

const Stories = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const navigation = useNavigation()
  const ref = useRef<FlatList>(null)

  const scrollX = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => scrollX.value = event.contentOffset.x
  })

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth)
    setActiveIndex(index)
  }

  const onClose = () => navigation.goBack()

  const swipeDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onEnd(() => {
      runOnJS(onClose)()
    });

  return (
    <GestureDetector gesture={swipeDown}>
      <Animated.FlatList
        ref={ref}
        data={slides}
        windowSize={5}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key.toString()}
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
        onMomentumScrollEnd={onMomentumScrollEnd}
        getItemLayout={(_, index) => ({ length: screenWidth, offset: screenWidth * index, index }) }
        horizontal
        pagingEnabled
        onScroll={onScroll}
        renderItem={({item, index}) => (
          <Story 
            item={item}
            index={index}
            scrollX={scrollX}
            flatListRef={ref}
            active={index === activeIndex}
            paused={isScrolling && index === activeIndex}
          />
        )}
      />
    </GestureDetector>
  )
}

export default Stories
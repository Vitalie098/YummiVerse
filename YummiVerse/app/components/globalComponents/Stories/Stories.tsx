import { Animated, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef, useState } from 'react'
import Story from './Story'
import { screenWidth } from '../../../utils/global/globalValues'
import { slides } from '../../../utils/fakeData/Stories'
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { runOnJS } from 'react-native-reanimated'

const Stories = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  
  const navigation = useNavigation()
  const ref = useRef<FlatList>(null)
  const scrollX = React.useRef(new Animated.Value(0)).current

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => setActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / screenWidth))

  const onClose = () => navigation.goBack();

  const swipeDown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onEnd(() => {
      runOnJS(onClose)();
    });

  return (
    <GestureDetector gesture={swipeDown}>
      <Animated.FlatList
        ref={ref}
        data={slides}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
        onMomentumScrollEnd={onMomentumScrollEnd}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        renderItem={({item, index}) => (
          <Story 
            item={item}
            index={index}
            scrollX={scrollX}
            flatListRef={ref}
            isScrolling={isScrolling}
            active={index === activeIndex}
          />
        )}
      />
    </GestureDetector>
  )
}

export default Stories
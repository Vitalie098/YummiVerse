import { View, Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { screenWidth } from '../../../utils/global/globalValues'
import styles from "./styles"
import { delay } from '../../../utils/functions/delay'

interface IStoryProgress {
  isLongPressed: boolean
  index: number
  done: boolean
  active: boolean
  duration: number
  onEnd: (newSlide: number, type: "prev" | "next", value: number) => void
}

const StoryProgress = ({index, active, done, duration, isLongPressed, onEnd}: IStoryProgress) => {
  const [progressWidth, setProgressWidth] = useState(0)

  const progress = useRef(new Animated.Value(-screenWidth / 3)).current
  const longPressElapsedDuration = useRef(0)

  React.useEffect(() => {
    const listener = progress.addListener(({ value }) => {
      longPressElapsedDuration.current = Math.abs((value * duration) / progressWidth)
      return
    })

    return () => {
      progress.removeListener(listener)
      progress.removeAllListeners()
    }
  })

  useEffect(() => {
    if (isLongPressed) {
      progress.stopAnimation()
    } else {
      if (active) {
        animation(longPressElapsedDuration.current).start((status) => {
          if(status.finished) onEnd(index + 1, "next", 1)
        })
      }
    }
  }, [isLongPressed, progressWidth])
  
  useEffect(() => {
    progress.setValue(-progressWidth)

    if (active) {
      progress.setValue(-progressWidth);
      
      (async () => {
        await delay(0)

        animation(duration).start((status) => {
          if(status.finished) onEnd(index + 1, "next", 1)
        })
      })()
    }

    if (done) progress.setValue(0)
  }, [active, done])

  useEffect(() => {
    progress.setValue(-progressWidth)
  }, [progressWidth])

  const animation = (durations: number) => {
    return Animated.timing(progress, {
      toValue: 0,
      duration: durations,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  } 

  return (
    <View
      key={index}
      style={styles.progress}>
      <Animated.View
        onLayout={(e) => setProgressWidth(e.nativeEvent.layout.width)}
        style={{
          ...styles.animatedProgress,
          transform: [{translateX: progress}]
        }}
      />
    </View>
  )
}

export default StoryProgress
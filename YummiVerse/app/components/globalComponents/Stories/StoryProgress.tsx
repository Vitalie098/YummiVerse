import React, { useEffect, useRef, useCallback, memo } from "react"
import { View, Animated, Easing, LayoutChangeEvent } from "react-native"
import styles from "./styles"

type IStoryProgress = {
  index: number
  active: boolean
  done: boolean
  duration: number
  isLongPressed: boolean
  onEnd: (nextIndex: number, dir: "next" | "prev", step: number) => void
}

const StoryProgress = ({ index, active, done, duration, isLongPressed, onEnd }: IStoryProgress) => {
  const progress = useRef(new Animated.Value(0)).current

  const widthRef = useRef(0)
  const elapsedRef = useRef(0) 
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const listener = progress.addListener(({ value }) => {
      const w = widthRef.current
      const d = duration

      if (w > 0 && d > 0) {
        const elapsed = Math.min(d, Math.abs((value * d) / w))
        elapsedRef.current = elapsed
      }
    })

    return () => {
      progress.removeListener(listener)
      progress.removeAllListeners()
    }
  }, [progress])

  useEffect(() => {
    if (done) {
      progress.setValue(0)
      return
    }

    if (!active) {
      progress.stopAnimation()
      progress.setValue(-widthRef.current)
      return
    }

    if (active && widthRef.current > 0) {
      start(duration)
    }
  }, [active, done, progress])


  useEffect(() => {
    if (!active) return

    if (isLongPressed) {
      progress.stopAnimation()
    } else {
      const remaining = Math.max(0, elapsedRef.current)
      if (widthRef.current > 0 && remaining > 0) start(remaining)
    }
  }, [isLongPressed, progress])

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const animation = useCallback((ms: number) =>
    Animated.timing(progress, {
      toValue: 0,
      duration: ms,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
    [progress]
  )

  const start = useCallback((ms: number) => {
    animation(ms).start(({ finished }) => {
      if (finished) onEnd(index + 1, "next", 1)
    })
  },[animation, onEnd, index])

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width
    if (!w || w === widthRef.current) return

    widthRef.current = w
    progress.setValue(-w)

    if (active) {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        start(duration)
      })
    }
  },[progress, start])

  return (
    <View style={styles.progress}>
      <Animated.View
        onLayout={onLayout}
        style={{ ...styles.animatedProgress, transform: [{ translateX: progress }] }}
      />
    </View>
  )
}

export default memo(StoryProgress)

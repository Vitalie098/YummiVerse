import { useEffect, useCallback } from 'react'
import {Extrapolate, interpolate, runOnJS, useAnimatedReaction, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated'

interface IParams {
  activeIndex: number
  layoutSection: number[]
  setActiveIndex: (idx: number) => void
}

const useAnimatedRecipesDetails = ({layoutSection, activeIndex, setActiveIndex}: IParams) => {
  const sectionsSV = useSharedValue<number[]>([])
  const currentIndexSV = useSharedValue(0)
  const stopSV = useSharedValue(false)
  const y = useSharedValue(0)
  
  useEffect(() => {
    sectionsSV.value = layoutSection ?? []
  }, [layoutSection, sectionsSV])

  useEffect(() => {
    currentIndexSV.value = activeIndex ?? 0
  }, [activeIndex, currentIndexSV])

  const headerTranslateStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          y.value,
          [0, 560, 560.1],
          [-150, -150, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }))

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      y.value,
      [0, 500, 570],
      [1, 1, 0],
      Extrapolate.CLAMP
    ),
  }))

  const requestStop = useCallback(() => {
    stopSV.value = true              
    setTimeout(() => {                 
      stopSV.value = false
    }, 500)
  }, [stopSV])

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      y.value = e.contentOffset.y
      if (stopSV.value) return 

      const arr = sectionsSV.value || []
      let idx = currentIndexSV.value

      while (idx + 1 < arr.length && y.value >= arr[idx + 1]) idx++
      while (idx > 0 && y.value < arr[idx]) idx--

      if (idx !== currentIndexSV.value) {
        currentIndexSV.value = idx
      }
    },
  })

  useAnimatedReaction(
    () => currentIndexSV.value,
    (newIdx, prevIdx) => {
      if (newIdx !== prevIdx) {
        runOnJS(setActiveIndex)(newIdx)
      }
    }
  )


  return {
    onScroll,
    requestStop,
    opacityStyle,
    headerTranslateStyle 
  }
}

export default useAnimatedRecipesDetails

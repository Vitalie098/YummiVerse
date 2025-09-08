import { View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import StoryProgress from './StoryProgress'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import StoryHeaderActions from './components/StoryHeaderActions'
import styles from "./styles"
import Content from './components/Content'
import StoryTapButton from './components/StoryTapButton'
import FastImage from 'react-native-fast-image'

interface ISlide {
  item: any
  index: number
  isScrolling: boolean,  
  active: boolean, 
  onPrevNextSlide: (value: number) => void
}

const Slide = ({item, active, index, isScrolling, onPrevNextSlide}: ISlide) => {
  const [isLongPressed, setIsLongPressed] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [loading, setLoading] = useState(true)
  const [duration, setDuration] = useState(0)

  const insets = useSafeAreaInsets()

  useEffect(() => {
    setActiveSlide(0)
  }, [active])

  const goPrevNextHandler = useCallback((newSlide: number, type: "prev" | "next", value: number) => {
    if(
      (newSlide < 0 && type === "prev") || 
      (newSlide > item.data.length - 1 && type === "next" )
    ){ return onPrevNextSlide(value) }

     setLoading(true)
     setActiveSlide(newSlide)
  },[item.data.length])

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
          <FastImage
            onLoad={() => {
              setLoading(false)
              setDuration(5000)
            }}
            source={{ uri: item.data[activeSlide] }}
            style={styles.image}
          />
      </View>

      <View style={[styles.buttonsWrapper]}>
        <StoryTapButton 
          setIsLongPressed={setIsLongPressed}
          goPrevNextHandler={() => goPrevNextHandler(activeSlide - 1, "prev", -1)}
        />

        <StoryTapButton 
          setIsLongPressed={setIsLongPressed}
          goPrevNextHandler={() => goPrevNextHandler(activeSlide + 1, "next", 1)}
        />
      </View>

      <View style={{...styles.header, top: insets.top + 16}}>
        <View
          key={index}
          style={styles.progressWrapper}
        >
          {item.data.map((_: any, i: number) => (
            <StoryProgress
              index={i}
              duration={duration}
              key={`${index}${i}`}
              done={activeSlide > i}
              onEnd={goPrevNextHandler}
              isLongPressed={isLongPressed || isScrolling}
              active={activeSlide === i && !loading && active}
            />
          ))} 
        </View>
        
        <StoryHeaderActions />
      </View>

      <Content />
    </View>
  )
}

export default Slide


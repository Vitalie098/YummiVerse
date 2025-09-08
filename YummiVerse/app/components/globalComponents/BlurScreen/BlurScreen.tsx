import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { StyleSheet } from 'react-native'

interface IBlurScreen {
  blurAmount?: number
  blurType?: "dark" | "light"
}

const BlurScreen = ({blurType = "dark", blurAmount}: IBlurScreen) => {
  return (
    <BlurView
      style={StyleSheet.absoluteFillObject}
      blurAmount={blurAmount || 13}
      blurType={blurType}
    />
  )
}

export default BlurScreen
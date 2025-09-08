import { View, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../../utils/global/globalStyles'

interface IThreeDots {
  isDarkMode?: boolean
  onPress: () => void
  extraStyles?: ViewStyle
}

const ThreeDots = ({ isDarkMode, extraStyles, onPress }: IThreeDots) => {
  return (
    <TouchableOpacity style={[globalStyles.centerAlignedRow, extraStyles]} onPress={onPress}>
      {[...Array(3).keys()].map(item => (
        <View key={item} style={[styles.circle, isDarkMode && styles.darkMode]} />
      ))}
    </TouchableOpacity>
  )
}

export default ThreeDots
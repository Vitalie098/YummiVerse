import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import globalStyles from '../../../utils/global/globalStyles'

interface IThreeDots {
  onPress: () => void
}

const ThreeDots = ({ onPress }: IThreeDots) => {
  return (
    <TouchableOpacity style={globalStyles.centerAlignedRow} onPress={onPress}>
      {[...Array(3).keys()].map(item => (
        <View key={item} style={{...styles.circle}} />
      ))}
    </TouchableOpacity>
  )
}

export default ThreeDots
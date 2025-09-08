import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Clock from "../../../../../../assets/svg/TimeClock.svg"
import styles from "./styles"

interface IInitialTimer {
  color: string
  onPress: () => void
}

const InitialTimer = ({color, onPress}: IInitialTimer) => {
  return (
    <TouchableOpacity style={{...styles.initialTimer, borderColor: color}} onPress={onPress}>
      <Clock color={color} width={16} height={16}/>
      <Text style={{...styles.text, color}}>Set timer 1’</Text>
    </TouchableOpacity>
  )
}

export default InitialTimer
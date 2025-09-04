import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import Minus from "../../../assets/svg/Minus.svg"
import Plus from "../../../assets/svg/Plus.svg"
import { colors } from '../../../utils/global/globalStyles'

interface ICounter {
  textStyles?: TextStyle
  containerStyles?: ViewStyle
}

const Counter = ({containerStyles, textStyles}: ICounter) => {
  const [count, setCount] = useState(1)

  const counterHandler = (number: number) => {
    setCount(prev => prev + number)
  }
  
  return (
    <View style={[styles.container, containerStyles]}>
      <TouchableOpacity 
        disabled={count === 1}
        hitSlop={5}
        onPress={()=> counterHandler(-1)}
      > 
        <Minus />
      </TouchableOpacity>

      <Text style={[styles.text, textStyles]}>{count}</Text>

      <TouchableOpacity 
        disabled={count === 10}
        hitSlop={5}
        onPress={() => counterHandler(1)}
      > 
        <Plus color={colors.mainColorT}/> 
      </TouchableOpacity> 
    </View>
  )
}

export default Counter
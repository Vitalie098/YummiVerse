import { View, Text, ViewStyle } from 'react-native';
import React from 'react'
import Clock from "../../../../../../assets/svg/TimeClock.svg"
import styles from "./style"
import { getColor } from '../../../../../../utils/renderIcons/CookingMode';

interface ITime {
  time: number
  containerStyles?: ViewStyle
  mode: "light" | "dark"
}

const Time = ({mode, time, containerStyles}: ITime) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Clock color={getColor(!(mode === "light"))}/>
      <Text style={{...styles.time, color: getColor(!(mode === "light"))}}>{time}’</Text>
    </View>
  )
}

export default Time
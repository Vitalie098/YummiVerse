import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgAnimatedCircle from '../SvgAnimatedCircle/SvgAnimatedCircle'
import Arrow from "../../../../../../assets/svg/TimerArrow.svg"
import styles from "./styles"
import { colors } from '../../../../../../utils/global/globalStyles'

interface ITimerRunning {
  time: number,
  isRunning: boolean
  handleButtonPress: () => void
  formatTime: (seconds: number) => string
}

const TimerRunning = ({time, isRunning, handleButtonPress, formatTime}: ITimerRunning) => {
  return (
    <TouchableOpacity style={styles.runningTimer} onPress={handleButtonPress}>
      <SvgAnimatedCircle
        width={18}
        radius={9}
        height={18}
        strokeWidth={3}
        isRunning={isRunning}
        duration={time * 1000}
        strokeColor={colors.mainColorT}
        strokeInactiveColor={"#B0A84D"}
      >
        <View style={styles.arrowWrapper}>
          <Arrow />
        </View>
      </SvgAnimatedCircle>
              
      <Text style={styles.time}>{formatTime(time)}</Text>
    </TouchableOpacity>
  )
}

export default TimerRunning
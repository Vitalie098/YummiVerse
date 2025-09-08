import React, { useState, memo, } from 'react'
import { View } from 'react-native'
import TimerRunning from './TimerRunning'
import InitialTimer from './InitialTimer'
import styles from "./styles"
import useTimer from '../../../../../../helpers/hooks/useTimer'

interface ITimer {
  color: string
}

const Timer = memo(({color}: ITimer) => {
  const [isActive, setIsActive] = useState(false)
  const {time, isRunning, formatTime, handleButtonPress} = useTimer(1)

  const startTimer = () => {
    setIsActive(true)
    handleButtonPress()
  }

  return (
    <View style={styles.container}>
      {isActive 
        ? <TimerRunning time={time} formatTime={formatTime} isRunning={isRunning} handleButtonPress={handleButtonPress}/> 
        : <InitialTimer color={color} onPress={startTimer} />
      }
    </View>
  )
})

export default Timer

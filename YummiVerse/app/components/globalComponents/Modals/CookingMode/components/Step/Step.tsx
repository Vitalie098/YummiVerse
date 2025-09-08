import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import CurrentStep from './CurrentStep'
import Time from '../Time'

interface IStep {
  index: number
  isCurrentStep: boolean
  data: {time?: number, text: string}
}

const Step = ({index, data, isCurrentStep}: IStep) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.step, isCurrentStep && styles.stepBold]}>Step {index + 1}</Text>
        <View style={[styles.line, isCurrentStep && styles.lineBlack]}/>
        {isCurrentStep && <CurrentStep />}
      </View>

      <View style={[styles.contentWrapper, isCurrentStep && styles.contentWrapperSelected]}>
        <View style={styles.imageWrapper}/>
        <View style={styles.detailsWrapper}>
          {data?.time && <Time mode="dark" containerStyles={styles.timeWrapper} time={data?.time} />}
          <Text style={styles.text}>{data.text}</Text>
        </View>
      </View>
    </>
  )
}

export default Step
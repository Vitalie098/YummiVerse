import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"

const CurrentStep = () => {
  return (
    <View style={styles.currentStepWrapper}>
      <Text style={styles.currentStepText}>You are here</Text>
    </View>
  )
}

export default CurrentStep
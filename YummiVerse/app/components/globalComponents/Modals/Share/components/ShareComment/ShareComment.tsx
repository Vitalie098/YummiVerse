import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import ThreeDots from '../../../../ThreeDots'

const ShareComment = () => {
  return (
    <View style={styles.container}>
      <ThreeDots extraStyles={styles.dots} isDarkMode={true} onPress={() => {}}/>
      <View style={styles.imageWrapper}/>

      <View style={styles.contentWrapper}>
        <Text numberOfLines={2} style={styles.text}>Air Fryer Shawarma Aubergine and Chickpea Bowl</Text>
      </View>
    </View>
  )
}

export default ShareComment
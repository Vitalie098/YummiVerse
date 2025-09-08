import React from 'react'
import { View } from 'react-native'
import styles from "./styles"
import Stories from '../../Stories/Stories'

const CommunityStories = () =>  {
  return (
    <View style={styles.container}>
      <Stories />
    </View>
  )
}

export default CommunityStories


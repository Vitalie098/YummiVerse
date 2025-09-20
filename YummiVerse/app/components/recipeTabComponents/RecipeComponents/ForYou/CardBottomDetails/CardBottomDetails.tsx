import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../../../../utils/global/globalStyles'
import styles from "./styles"
import { Content } from '../../../../../utils/fakeData/RecipesForYouScreenData'

interface ICardBottomDetails {
  title: string
  isLargeText?: boolean
}

const CardBottomDetails = ({title, isLargeText}: ICardBottomDetails) => {
  return (
    <View style={[globalStyles.endAlignedFlex]}>
      <Text style={isLargeText ? styles.largeText: styles.text} numberOfLines={2}>{title}</Text>
    </View>
  )
}

export default CardBottomDetails
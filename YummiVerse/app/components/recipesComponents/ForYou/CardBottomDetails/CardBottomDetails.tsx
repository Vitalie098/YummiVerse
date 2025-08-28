import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../../../utils/global/globalStyles'
import styles from "./styles"
import { Content } from '../../../../utils/fakeData/RecipesForYouScreenData'

interface ICardBottomDetails {
  data: Content
}

const CardBottomDetails = ({data}: ICardBottomDetails) => {
  return (
    <View style={[globalStyles.endAlignedFlex]}>
      <Text style={styles.cardTitle} numberOfLines={2}>{data.title}</Text>
    </View>
  )
}

export default CardBottomDetails
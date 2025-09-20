import { View, Text } from 'react-native'
import React from 'react'
import ThreeDots from '../../../../globalComponents/ThreeDots'
import styles from "./styles"
import globalStyles from '../../../../../utils/global/globalStyles'

interface IBrandHeaderWithActions {
  onlyDots?: boolean
}

const RecipeCardHeader = ({onlyDots = false}: IBrandHeaderWithActions) => {
  return (
    <View style={globalStyles.horizontalSpaceBetween}>
      <View style={globalStyles.centerAlignedRow}>
        {!onlyDots && (
          <>
            <View style={styles.brand} />
            <View style={styles.metric}>
              <Text style={styles.textMetric}>88</Text>
            </View>
          </>
        )}
      </View>

      <ThreeDots onPress={() => {}}/>
    </View>
  )
}

export default RecipeCardHeader
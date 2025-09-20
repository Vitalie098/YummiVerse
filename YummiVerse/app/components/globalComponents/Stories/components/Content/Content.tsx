import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from "./styles"
import Plus from "../../../../../assets/svg/Plus.svg"

const Content = () => {
  const insets = useSafeAreaInsets()

  return (
    <View style={{...styles.container, bottom: insets.bottom }}>
      <Text style={styles.title}>Jesus Christ, King of kings and Lord of lords</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.seeButton}>
          <Text style={styles.buttonText}>See the recipe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>
          <Plus color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Content
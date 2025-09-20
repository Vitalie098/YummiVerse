import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import { getUtensilIcon, iconType } from '../../../../../../utils/renderIcons/RecipeDetailsInstruction'

interface IDescription {
  iconType: iconType
  text: string
}

const Description = ({text, iconType}: IDescription) => {
  return (
    <View style={styles.infoWrapper}>
      {getUtensilIcon(iconType)}
      <Text style={styles.infoText}>{text}</Text>
    </View>
  )
}

export default Description
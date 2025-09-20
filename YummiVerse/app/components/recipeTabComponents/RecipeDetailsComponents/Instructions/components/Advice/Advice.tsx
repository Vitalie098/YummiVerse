import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import { adviceType, getAdviceIcon } from '../../../../../../utils/renderIcons/RecipeDetailsInstruction'

interface IAdvice {
  title: string
  subtitle: string
  type: adviceType
}

const Advice = ({type, title, subtitle}: IAdvice) => {
  return (
    <View style={styles.container}>
      {getAdviceIcon(type)}

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

export default Advice
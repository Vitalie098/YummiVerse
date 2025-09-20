import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { useTranslation } from 'react-i18next'

interface IRecipeSectionHeader {
  text: string
  onPress: () => void
}

const RecipeSectionHeader = ({text,  onPress}: IRecipeSectionHeader) => {
  const {t} = useTranslation();
  
  return (
    <View style={{...styles.container}}>
      <Text style={styles.sectionTitle} numberOfLines={1}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.sectionActionText}>{t('recipes.seeAll')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RecipeSectionHeader
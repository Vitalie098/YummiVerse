import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Foods from "../../../../assets/svg/Foods.svg"
import styles from "./styles"
import { useTranslation } from 'react-i18next'

const MenuPlanPromoCard = () => {
  const {t} = useTranslation()

  return (
    <View style={styles.container}>
      <Foods />
      <Text style={styles.text}>{t('recipes.prompt')}</Text>

      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{t('recipes.promptButton')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuPlanPromoCard
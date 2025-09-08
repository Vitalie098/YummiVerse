import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { useNavigation } from '@react-navigation/native'
import Recipe from "../../../../../../assets/svg/Recipe.svg"
import { getColor, getIcon, iconType } from '../../../../../../utils/renderIcons/CookingMode'
import { colors } from '../../../../../../utils/global/globalStyles'

interface IRecipeTitle { 
  type: iconType
  isLightMode?: boolean
  expandBottomSheet?: (variant: number) => void
}

const RecipeTitle = ({type, isLightMode = false, expandBottomSheet}: IRecipeTitle) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.leftSideWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={7}>
          {getIcon(type, isLightMode)}
        </TouchableOpacity>
                    
        <Text numberOfLines={1} style={[styles.text, (type === "back" || isLightMode) && {color: colors.mainColorT}]}>
          Air Fryer Shawarma Aubergine and Chickpea Bowl
        </Text>
      </View>

      {expandBottomSheet && (
        <TouchableOpacity hitSlop={5} onPress={() => expandBottomSheet(2)}>
          <Recipe color={getColor(isLightMode)}/>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default RecipeTitle
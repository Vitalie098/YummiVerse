import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Instructions from "../../../../../../assets/svg/Instructions.svg"
import globalStyles from '../../../../../../utils/global/globalStyles'
import { RecipesNavigationProp } from '../../../../../../core/navigation/types/RecipesNavigatorTypes'
import { getColor } from '../../../../../../utils/renderIcons/CookingMode'
import Time from '../Time'
import styles from "./styles"
import RecipeTitle from '../RecipeTitle'

interface IHeader {
  currentIndex: number
  isLightMode: boolean
  numberOfSlides: number
  expandBottomSheet: (variant: number) => void
}

const Header = ({currentIndex, isLightMode, numberOfSlides, expandBottomSheet}: IHeader) => {
  const navigation = useNavigation<RecipesNavigationProp>()

  return (
    <>
      <RecipeTitle type="close" isLightMode={isLightMode} expandBottomSheet={expandBottomSheet}/>

      <View style={styles.middleWrapper}>
        {[...Array(numberOfSlides).keys()].map((_, index) => <View key={index} style={[styles.stepLine, currentIndex >= index && {backgroundColor: getColor(isLightMode)}]}/>)}
      </View>

      <View style={globalStyles.horizontalSpaceBetween}>
        <Time mode={isLightMode ? "dark" : "light"} time={5}/>

        <TouchableOpacity style={{...styles.allStepsButtonWrapper, borderColor: getColor(isLightMode)}} onPress={() => navigation.navigate("CookingListSteps", {currentIndex})}>
          <Text style={{...styles.allStepsButtonText, color: getColor(isLightMode)}}>All steps</Text>
          <Instructions color={getColor(isLightMode)}/>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Header
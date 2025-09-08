import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import Utensils from "../../../../../../assets/svg/Utensils.svg"
import PreviousNextButton from '../PreviousNextButton';
import Timer from '../Timer';
import globalStyles from '../../../../../../utils/global/globalStyles';
import { actionButton, getColor } from '../../../../../../utils/renderIcons/CookingMode';

interface IFooter {
  isLightMode: boolean
  currentIndex: number
  onPress: (type: actionButton) => void
  expandBottomSheet: (variant: number) => void
}

const Footer = ({isLightMode, currentIndex, expandBottomSheet, onPress}: IFooter) => {
  const color = getColor(isLightMode)

  return (
    <View style={[styles.container, isLightMode && styles.cp]}> 
      {!isLightMode && <Timer color={color}/>}
     
      <Text style={[{...styles.instruction, color}, isLightMode && styles.bigText]} numberOfLines={5}>Make an incision around each half of the aubergine and use the tip of the knife to score the flesh in a crosshatch pattern.</Text>

      <View style={[isLightMode && globalStyles.endAlignedFlex]}>
        <View style={globalStyles.horizontalSpaceBetween}>
          <TouchableOpacity style={{...styles.buttonWrapper, borderColor: getColor(isLightMode)}} onPress={() => expandBottomSheet(1)}>
            <Utensils color={color} />
            <Text style={{...styles.buttonText, color}}>What you need</Text>
          </TouchableOpacity>

          <View style={styles.prevNextWrapper}>
            <PreviousNextButton type="prev" active={false} onPress={() => onPress("prev")} isLightMode={isLightMode} disabled={currentIndex === 0}/>
            <PreviousNextButton type="next" active={true} onPress={() => onPress("next")} isLightMode={isLightMode}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Footer
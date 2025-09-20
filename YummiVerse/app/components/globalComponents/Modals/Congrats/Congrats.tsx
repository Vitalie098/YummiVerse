import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Close from "../../../../assets/svg/CloseModalIcon.svg"
import Confetti from "../../../../assets/svg/Confetti.svg"
import { useNavigation, useRoute } from '@react-navigation/native'
import { RecipesCongratsNavigationRouteProp, RecipesNavigationProp } from '../../../../core/navigation/types/RecipesNavigatorTypes'
import styles from "./styles"
import globalStyles, { colors } from '../../../../utils/global/globalStyles'
import { getPermissionAndTakePhoto } from '../../../../helpers/permisions/getCameraPermision'
import { dataByScreenType } from '../../../../utils/fakeData/Congrats'
import FastImage from 'react-native-fast-image'

type shareType = "photo" | "comment"

const Congrats = () => {
  const { type } = useRoute<RecipesCongratsNavigationRouteProp>().params
  const navigation = useNavigation<RecipesNavigationProp>()
  const insets = useSafeAreaInsets()
  
  const popCount = type === "congrats" ? 2 : 4

  const onPressHandler = (type: shareType) => {
    if(type === "photo") getPermissionAndTakePhoto(undefined, navigation)
    if(type === "comment") navigation.navigate("Share", {type: "comment"})
  }

  return (
    <View style={styles.container}>
      <View style={{...styles.contentWrapper, paddingTop: insets.top}}>
        <TouchableOpacity style={styles.close} onPress={() => navigation.pop(popCount)} hitSlop={7}>
          <Close color={colors.mainColorT} />
        </TouchableOpacity>
        
        <View style={styles.textsWrapper}>
          <Text style={styles.title}>{dataByScreenType[type].title}</Text>
          <Text style={styles.subtitle}>{dataByScreenType[type].subtitle}</Text>
        </View>

        <View style={styles.buttonsWrapper}>
          {dataByScreenType[type].buttons.map((button, index) => (
            <TouchableOpacity 
              key={index}
              style={{...styles.button, backgroundColor: index !== 0 ? "#fff" : colors.mainColorT }} 
              onPress={() => onPressHandler(button.action as shareType)}
            >
              <Text style={{...styles.buttonText, color: index !== 0 ? colors.mainColorT : "#fff"}}>{button.text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {dataByScreenType[type].extraButton.map((text, index) => (
          <TouchableOpacity style={styles.extraButton} key={index}>
            <Text style={styles.extraButtonText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.imagesWrapper}>
        <FastImage source={require("../../../../assets/png/Man.png")} style={globalStyles.fullScreen}/>
        <Confetti style={styles.confetti} width="100%"/>
      </View>
    </View>
  )
}

export default Congrats
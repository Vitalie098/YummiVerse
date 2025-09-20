import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import ArrowLeft from "../../../../assets/svg/ArrowLeft.svg"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import styles from "./styles"
import { useNavigation, useRoute } from '@react-navigation/native'
import { RecipesNavigationProp, RecipesResultNavigationRouteProp } from '../../../../core/navigation/types/RecipesNavigatorTypes'
import { colors } from '../../../../utils/global/globalStyles'
import SharePhoto from './components/SharePhoto'
import ShareComment from './components/ShareComment'
import { shareContent } from '../../../../utils/fakeData/Share'

const Share = () => {
  const {type, photo} = useRoute<RecipesResultNavigationRouteProp>().params
  const navigation = useNavigation<RecipesNavigationProp>()
  const insets = useSafeAreaInsets() 

  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    if(inputRef.current) setTimeout(() => inputRef.current!.focus(), 500)
  }, [])

  return (
    <View style={{...styles.container, paddingTop: insets.top + 22 }}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.arrowWrapper} onPress={() => navigation.goBack()}>
            <ArrowLeft color={colors.mainColorT}/>
          </TouchableOpacity>
          
          <Text style={[styles.headerText]}>{shareContent[type].topic}</Text>
        </View>

        <View style={styles.textsWrapper}>
          <Text style={[styles.title, !photo && styles.bigSize]}>{shareContent[type].title}</Text>
          <Text style={styles.subtitle}>{shareContent[type].subtitle}</Text>
        </View>

        {photo && <SharePhoto asset={photo}/>}
        {!photo && <ShareComment />}
      </View>
    </View>
  )
}

export default Share
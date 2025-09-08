import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Asset } from 'react-native-image-picker'
import styles from "./styles"
import { useNavigation } from '@react-navigation/native'
import { RecipesNavigationProp } from '../../../../../../core/navigation/types/RecipesNavigatorTypes'

interface IPhoto {
  asset: Asset
}

const SharePhoto = ({asset}: IPhoto) => {
  const navigation = useNavigation<RecipesNavigationProp>()

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={asset}  style={styles.image}/>
      </View>

      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Retake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.blackButton]} onPress={() => navigation.push("Congrats", {type: "photo"})}>
          <Text style={[styles.text, styles.whiteText]}>Share</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SharePhoto
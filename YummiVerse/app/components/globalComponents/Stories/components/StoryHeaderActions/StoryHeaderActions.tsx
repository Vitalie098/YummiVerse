import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Arrow from "../../../../../assets/svg/CommunityStoriesArrow.svg"
import Close from "../../../../../assets/svg/CloseModalIcon.svg"
import globalStyles from '../../../../../utils/global/globalStyles'
import { useNavigation } from '@react-navigation/native'
import styles from "./styles"

const StoryHeaderActions = () => {
  const navigation = useNavigation()

  return (
    <View style={globalStyles.horizontalSpaceBetween}>
      <View style={styles.container}>
        <View style={styles.categoryImgWrapper}/>

        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>Parenting</Text>
          <View style={styles.subtitleWrapper}>
            <Text style={styles.subtitle}>See more</Text>
            <Arrow />
          </View>
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Close color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StoryHeaderActions
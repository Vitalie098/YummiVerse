import { View, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import ThreeDots from '../../../globalComponents/ThreeDots'
import { IHelp } from '../../../../utils/fakeData/RecipesForYouScreenData'
import ArrowUp from "../../../../assets/svg/ArrowUpCard.svg"
import CardBottomDetails from '../CardBottomDetails/CardBottomDetails'

interface IRecipesHelpCard {
  item: IHelp
  isCurrent: boolean
}

const SwipeableCard = ({item, isCurrent}: IRecipesHelpCard) => {
  return (
    <Pressable style={styles.containerCard}>
      <View style={styles.headerWrapper}>
        <View style={styles.brandContainer}/>
        <ThreeDots onPress={() => {}} isDarkMode={true}/>
      </View>

      <Image source={{uri: item.uri}} style={styles.renderCardImage} resizeMode="cover" />

      <View style={styles.recipeDetailsWrapper}>
        <CardBottomDetails title={item.title} isLargeText={true}/>
      </View>

      {isCurrent && <ArrowUp style={styles.arrow}/>}
    </Pressable>
  )
}

export default SwipeableCard
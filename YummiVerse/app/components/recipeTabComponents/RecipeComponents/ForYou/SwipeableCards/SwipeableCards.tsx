import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from "./styles"
import SwipeableCard from './SwipeableCard'
import { IHelp } from '../../../../../utils/fakeData/RecipesForYouScreenData'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import globalStyles from '../../../../../utils/global/globalStyles'
import { screenWidth } from '../../../../../utils/global/globalValues'
import { useTranslation } from 'react-i18next'

interface RecipesHelpInterface {
  data: IHelp[]
}

const SwipeableCards = ({data}: RecipesHelpInterface) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const {t} = useTranslation()
  
  const ref = useRef<SwiperCardRefType>(null)

  const onSwipeLeft = (cardIndex: number) => {
    if(cardIndex === 0) return
    ref.current?.swipeBack()
    setActiveIndex(cardIndex - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>{t('recipes.kids')}</Text>

      <View style={styles.swipeCardsWrapper}>
        <Swiper
          ref={ref}
          data={data}
          disableTopSwipe={true}
          onSwipeLeft={onSwipeLeft}
          cardStyle={globalStyles.fullScreen}
          translateXRange={[-screenWidth / 10, 0, screenWidth / 25]}
          onSwipeRight={(cardIndex) => setActiveIndex(cardIndex + 1)}
          renderCard={(item, index) => <SwipeableCard item={item} isCurrent={activeIndex === index}/>}
        />
      </View>
    </View>
  )
}

export default SwipeableCards
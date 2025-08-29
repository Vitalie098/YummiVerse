import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles'
import RecipesHelpCard from './SwipeableCard'
import { IHelp } from '../../../../utils/fakeData/RecipesForYouScreenData'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import globalStyles from '../../../../utils/global/globalStyles'
import { useTranslation } from 'react-i18next'
import { screenWidth } from '../../../../utils/global/globalValues'

interface RecipesHelpInterface {
  data: IHelp[]
  onPress: () => void
}

const SwipeableCards = ({data, onPress}: RecipesHelpInterface) => {
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
          cardStyle={{...globalStyles.fullScreen}}
          translateXRange={[-screenWidth / 10, 0, screenWidth / 25]}
          onSwipeRight={(cardIndex) => setActiveIndex(cardIndex + 1)}
          renderCard={(item, index) => <RecipesHelpCard item={item} onPress={onPress} isCurrent={activeIndex === index}/>}
        />
      </View>
    </View>
  )
}

export default SwipeableCards
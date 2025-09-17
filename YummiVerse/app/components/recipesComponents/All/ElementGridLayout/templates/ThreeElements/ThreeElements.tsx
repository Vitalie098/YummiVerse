import { View} from 'react-native'
import React from 'react'
import SmallCard from '../../cards/SmallCard'
import BigCard from '../../cards/BigCard'
import styles from "./styles"
import { PostData } from '../../../../../../utils/fakeData/RecipesAllScreenData'

interface IThreeElements {
  data: PostData[]
  reverse: boolean
}

const ThreeElements = ({data, reverse}: IThreeElements) => {
  return (
    <View style={[styles.container, reverse && {flexDirection: "row-reverse"}]}>
      <View style={styles.smallCardsWrapper}>
        {data.slice(0, 2).map((item, index) => <SmallCard title={item.title} key={index}/>)}
      </View>
      <BigCard title={data[data.length - 1].title} />
    </View>
  )
}

export default ThreeElements
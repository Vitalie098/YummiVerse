import { View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react'
import styles from "./styles"
import ThreeDots from '../../../../../../globalComponents/ThreeDots'
import CardBottomDetails from '../../../../ForYou/CardBottomDetails/CardBottomDetails';
import { PostData } from '../../../../../../../utils/fakeData/RecipesAllScreenData';

interface IOneElement {
  data: PostData[]
}

const OneElement = ({data}: IOneElement) => {
  const renderItem = ({item, index}: {item: PostData, index: number }) => (
    <TouchableOpacity 
      key={index} 
      style={[styles.container]}
    >
      <View style={styles.imageWrapper}/>
      <CardBottomDetails title={item.title}/>
      <ThreeDots isDarkMode={true} extraStyles={styles.dots} onPress={() => {}}/>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  )
}

export default OneElement
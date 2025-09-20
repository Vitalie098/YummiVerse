import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Filter from "../../../../../assets/svg/Filter.svg"
import styles from "./styles"
import FilterOption from './FilterOption'

const Filters = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterIconWrapper}> 
        <Filter />
      </TouchableOpacity>

      <FlatList
        horizontal={true}
        contentContainerStyle={{gap: 8}}
        showsHorizontalScrollIndicator={false}
        data={["Italian", "American", "Vegan", "Chinese", "German", "French"]}
        renderItem={({item}) => <FilterOption filter={item} />}
      />
    </View>
  )
}

export default Filters
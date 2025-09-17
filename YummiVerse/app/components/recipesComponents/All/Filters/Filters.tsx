import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Filter from "../../../../assets/svg/Filter.svg"
import styles from "./styles"
import FilterOption from './FilterOption'
import { useNavigation } from '@react-navigation/native'
import { RecipesNavigationProp } from '../../../../core/navigation/types/RecipesNavigatorTypes'

const Filters = () => {
  const navigation = useNavigation<RecipesNavigationProp>()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterIconWrapper} onPress={() => navigation.navigate("Filters")}> 
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
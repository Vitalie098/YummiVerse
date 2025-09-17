import { Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"

interface IFilterOption {
  filter: string
}

const FilterOption = ({filter}: IFilterOption) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <TouchableOpacity 
      onPress={() => setIsSelected(prev => !prev)}
      style={[styles.filterOptionWrapper, isSelected && styles.selected]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>{filter}</Text>
    </TouchableOpacity>
  )
}

export default FilterOption
import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"

interface IColumn {
  columnNumber: number
  value: number
  text: string
}

const Column = ({text, value, columnNumber}: IColumn) => {
  return (
    <View style={[styles.column, columnNumber === 1 && styles.column1, columnNumber === 3 && styles.column3]}>
      <Text style={styles.value}>{value}’</Text>
      <Text style={styles.textColor}>Preparation</Text>
    </View>
  )
}

export default Column
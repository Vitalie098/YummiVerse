import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import Clock from "../../../../../../assets/svg/TimeClock.svg"
import Column from './Column'
import { colors } from '../../../../../../utils/global/globalStyles'
import { tableData } from '../../../../../../utils/fakeData/Table'

const Table = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Total time</Text>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>37’</Text>
          <Clock color={colors.mainColorT}/>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        {tableData.map((el, index) => <Column key={index} text={el.text} value={el.value} columnNumber={index + 1}/>)}
      </View>
    </View>
  )
}

export default Table
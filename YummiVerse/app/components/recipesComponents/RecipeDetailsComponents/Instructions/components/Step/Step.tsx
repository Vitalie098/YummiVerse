import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Clock from "../../../../../../assets/svg/TimeClock.svg"
import Check from "../../../../../../assets/svg/Check.svg"
import styles from "./styles"
import Description from './Description'
import { colors } from '../../../../../../utils/global/globalStyles'

interface IStep {
  item: any,
  step: number,
  totalSteps: number
}

const Step = ({item, step, totalSteps}: IStep) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textColor}>{step} of {totalSteps}</Text>
        
        <View style={styles.timeWrapper}>
          <Clock color={colors.mainColorT} />
          <Text style={styles.textColor}>{item.time}’</Text>
        </View>
      </View>

      <View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          
          <TouchableOpacity 
            onPress={() => setIsChecked(prev => !prev)}
            style={[styles.checkButton, isChecked && styles.checked]}
          >
            <Check />
          </TouchableOpacity>
        </View>
        
        <Text style={[styles.subtitle, item.image && styles.subtitleMargin]}>{item.subtitle}</Text>

        {item.image && <View style={[styles.imageWrapper, item.description1 && styles.imageMargin]}/>}

        <View style={styles.infosWrapper}>
          {item.description1 && <Description text={item.description1.text} iconType={item.description1.type}/>}
          {item.description2 && <Description text={item.description2.text} iconType={item.description2.type}/>}
        </View>
      </View>
    </View>
  )
}

export default Step
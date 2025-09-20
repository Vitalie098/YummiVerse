import { View, Text, LayoutChangeEvent } from 'react-native'
import React from 'react'
import styles from "./styles"
import Table from './components/Table'
import Step from './components/Step'
import Advice from './components/Advice'
import Utensils from '../Utensils'
import MarkAddButton from '../MarkAddButton'
import { advices, steps } from '../../../../utils/fakeData/RecipesDetailsData'

interface IInstructions {
  handleLayout: ((event: LayoutChangeEvent) => void)
}

const Instructions = ({handleLayout} :IInstructions) => {
  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.headerWrapper}>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.steps}>5 steps</Text>
      </View>

      <Table />
      <Utensils />

      <View style={styles.stepsWrapper}>
        {steps.map((item, index) => <Step key={index} item={item} step={index + 1} totalSteps={steps.length}/>)}
      </View>

      <View style={styles.advicesWrapper}>
        {advices.map((el, index) => <Advice key={index} title={el.title} subtitle={el.subtitle} type={el.type}/>)}
        <MarkAddButton type={"light"} text={"Mark as complete"}/>
      </View>
    </View>
  )
}

export default Instructions
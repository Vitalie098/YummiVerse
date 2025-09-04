import { View, Text, LayoutChangeEvent } from 'react-native'
import React from 'react'
import styles from "./styles"
import Ingredients from '../Ingredients'
import MarkAddButton from '../MarkAddButton'

interface IServings {
  handleLayout: (event: LayoutChangeEvent) => void
}

const Servings = ({handleLayout}: IServings) => {
  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container} onLayout={handleLayout}>
        <Ingredients ph={0}/>
        <MarkAddButton type='dark' text={"Add all to my grocery list"} mb={53}/>

        <View>
          <Text style={styles.title}>Save this promo</Text>

          <View style={styles.couponWrapper}>
            <View style={styles.imgWrapper}/>

            <View>
              <Text style={styles.percentage}>-20% off</Text>
              <Text style={styles.text}>Maggi Oriental Teriyaki Noodles</Text>
              <View style={styles.buttomRedeemWrapper}>
                <Text style={styles.buttonRedeemText}>Redeem coupon</Text>
              </View>
            </View>
          </View>

          <MarkAddButton type='light' text={"Add all to my grocery list"}/>
        </View>
      </View>
    </View>
  )
}

export default Servings
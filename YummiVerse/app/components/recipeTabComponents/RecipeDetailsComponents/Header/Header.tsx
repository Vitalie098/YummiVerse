import { View, Text, TouchableOpacity } from 'react-native'
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import React from 'react'
import styles from "./styles"
import ArrowLeft from "../../../../assets/svg/ArrowLeft.svg"
import ActionButton from './ActionButton'
import Menu from '../Menu'
import { useNavigation } from '@react-navigation/native'
import { onShareHandler } from '../../../../helpers/functions/onShareHandler'

interface IHeader {
  opacityStyle: AnimatedStyleProp<any>
  goTo: (index: number) => void
  layout: {x: number, width: number}[]
  openBottomSheetHandler: () => void
}

const Header = ({layout, opacityStyle, goTo, openBottomSheetHandler}: IHeader) => {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.imgWrapper}>
        <View style={styles.imgWrapperTop}>
          <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={7}>
            <ArrowLeft color="#fff" />
          </TouchableOpacity>
          
          <View style={styles.infoWrapper}>
            <View style={styles.brandWrapper}/>
            <View style={styles.timeWrapper}/>
          </View>
        </View>
      </View>

      <View style={styles.footerWrapper}>
        <Text style={styles.title}>Air Fryer Shawarma Aubergine and Chickpea Bowl</Text>
          
        <Animated.View style={[styles.buttonsWrapper, opacityStyle]}>
          <TouchableOpacity style={styles.buttonCook} onPress={openBottomSheetHandler}>
            <Text style={styles.buttonCookText}>Cook now</Text>
          </TouchableOpacity>

          <ActionButton type={"plus"} onPress={() => {}}/>
          <ActionButton type={"share"} onPress={onShareHandler}/>
        </Animated.View>

        <Menu goTo={goTo} layout={layout} activeIndex={0}/>
      </View>
    </>
  )
}

export default React.memo(Header)
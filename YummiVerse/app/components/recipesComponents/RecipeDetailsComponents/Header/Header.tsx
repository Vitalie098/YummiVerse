import { View, Text, TouchableOpacity, Animated, Image, ImageBackground, StatusBar} from 'react-native'
import React from 'react'
import styles from "./styles"
import ArrowLeft from "../../../../assets/svg/ArrowLeft.svg"
import ActionButton from './ActionButton'
import Menu from '../Menu'
import { useNavigation } from '@react-navigation/native'
import { onShareHandler } from '../../../../helpers/functions/onShareHandler'

interface IHeader {
  opacityView: any
  activeIndex: number
  goTo: (index: number) => void
  layout: {x: number, width: number}[]
}

const Header = ({layout, opacityView, activeIndex, goTo}: IHeader) => {
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
          
        <Animated.View style={{...styles.buttonsWrapper, opacity: opacityView}}>
          <TouchableOpacity style={styles.buttonCook}>
            <Text style={styles.buttonCookText}>Cook now</Text>
          </TouchableOpacity>

          <ActionButton type={"plus"} onPress={() => {}}/>
          <ActionButton type={"share"} onPress={onShareHandler}/>
        </Animated.View>

        <Menu goTo={goTo} layout={layout} activeIndex={activeIndex}/>
      </View>
    </>
  )
}

export default Header
import { View, Text, TouchableOpacity, LayoutChangeEvent } from 'react-native'
import React from 'react'
import styles from "./styles"
import AnimatedSvg from '../../../globalComponents/AnimatedSvg'
import { recipesDetailsMenu } from '../../../../utils/header/headerProperties'

interface IMenu {
  activeIndex: number
  layout: {x: number, width: number}[]
  goTo: (index: number) => void
  handleLayout?: ((event: LayoutChangeEvent) => void)
}

const Menu = ({layout, activeIndex, handleLayout, goTo}: IMenu) => {
  return (
    <View style={styles.menuWrapper}>
      {recipesDetailsMenu.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => goTo(index)} onLayout={handleLayout}>
          <Text style={[styles.menu, index === activeIndex && styles.bold]}>{item}</Text>
        </TouchableOpacity> 
      ))}

      <AnimatedSvg
        svgWidth={145}
        decrease={140}
        layout={layout}
        svgViewBox={'0 0 210 10'}
        styles={styles.animated}
        activeIndex={activeIndex}
        itemsLength={recipesDetailsMenu?.length}
      />
    </View>
  )
}

export default Menu
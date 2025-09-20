import { LayoutChangeEvent } from 'react-native'
import React from 'react'
import styles from "./styles"
import Menu from '../Menu'
import Animated, {AnimatedStyleProp} from 'react-native-reanimated'

interface IAbsoluteMenu {
  activeIndex: number
  goTo: (index: number) => void
  layout: {x: number, width: number}[]
  animatedHeaderRecipesDetailsTranslate: AnimatedStyleProp<any>;
  handleLayout: ((event: LayoutChangeEvent) => void)
}

const AbsoluteMenu = ({layout, activeIndex, animatedHeaderRecipesDetailsTranslate, handleLayout, goTo}: IAbsoluteMenu) => {
  return (
    <Animated.View style={[styles.container,animatedHeaderRecipesDetailsTranslate]}>
      <Menu 
        goTo={goTo}
        layout={layout}
        activeIndex={activeIndex}
        handleLayout={handleLayout}
      />
    </Animated.View>
  )
}

export default AbsoluteMenu
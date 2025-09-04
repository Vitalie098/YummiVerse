import { LayoutChangeEvent, Animated } from 'react-native'
import React from 'react'
import styles from "./styles"
import Menu from '../Menu'

interface IAbsoluteMenu {
  activeIndex: number
  goTo: (index: number) => void
  layout: {x: number, width: number}[]
  animatedHeaderRecipesDetailsTranslate: any
  handleLayoutMenu: ((event: LayoutChangeEvent) => void)
}

const AbsoluteMenu = ({layout, activeIndex, animatedHeaderRecipesDetailsTranslate, handleLayoutMenu, goTo}: IAbsoluteMenu) => {
  return (
    <Animated.View 
      style={[
        styles.container,
        typeof animatedHeaderRecipesDetailsTranslate === "object" && {transform: [{translateY: animatedHeaderRecipesDetailsTranslate}]} 
      ]}
    >
      <Menu 
        goTo={goTo}
        layout={layout}
        activeIndex={activeIndex}
        handleLayoutMenu={handleLayoutMenu}
      />
    </Animated.View>
  )
}

export default AbsoluteMenu
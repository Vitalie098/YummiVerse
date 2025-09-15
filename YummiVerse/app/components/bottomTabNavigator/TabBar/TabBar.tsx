import { View, Pressable, LayoutChangeEvent } from 'react-native'
import React from 'react'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import styles from "./styles"
import { colors } from '../../../utils/global/globalStyles'

interface TabBarComponentProps  {
  active: boolean
  onPress: () => void
  options: BottomTabNavigationOptions
  onLayout: (e: LayoutChangeEvent) => void
}

const TabBar = ({ active, options, onLayout, onPress }: TabBarComponentProps) => {
  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.container}>
      <View style={[styles.iconContainer]}>
        {options.tabBarIcon 
          ? (
            <View style={[styles.iconContainer, active && {marginTop: -8}]}>
              
              {options.tabBarIcon({ focused: active, color: active ? colors.mainColorT : '#454557ff', size: 24 })} 

              {typeof options.tabBarLabel === 'function'
                ? options.tabBarLabel({ focused: active, color: active ? '#000' : '#888', position: 'below-icon', children: '' })
                : options.tabBarLabel
              }
            </View>
          ): null
        }
      </View>
    </Pressable>
  )
}

export default TabBar

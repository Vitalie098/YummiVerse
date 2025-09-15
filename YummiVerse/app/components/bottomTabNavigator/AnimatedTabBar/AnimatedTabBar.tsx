import { View, LayoutChangeEvent } from 'react-native'
import React, { useState } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import styles from "./styles"
import TabBar from '../TabBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getRouteName, NestedRoute } from '../../../helpers/functions/getRouteName'
import { bottomTabNavigatorStacks, TAB_BAR_MAX_HEIGHT, TAB_BAR_MIN_HEIGHT } from '../../../utils/global/globalValues'
import AnimatedSvg from '../../globalComponents/AnimatedSvg'

const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors }: BottomTabBarProps) => {
  const [layout, setLayout] = useState<{x: number, index: number}[]>([])

  const insets = useSafeAreaInsets()

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    const { x } = event.nativeEvent.layout;
  
    setLayout((prev) => {
      if (prev.find(item => item.index === index)) return prev;
      return [...prev, { x, index }];
    });
  };

  const route = routes[activeIndex] as NestedRoute;
  const routeName = getRouteName(route);

  return (
    <View 
      style={[
        styles.tabBar, 
        !bottomTabNavigatorStacks.includes(routeName) && {display: "none"},
        {height: insets.bottom && insets.bottom > 0 ? TAB_BAR_MAX_HEIGHT : insets.bottom + TAB_BAR_MIN_HEIGHT}
      ]}
    >
      <AnimatedSvg
        svgWidth={90}
        decrease={105}
        layout={layout}
        isTabBar={true}
        svgViewBox={'0 0 190 10'}
        activeIndex={activeIndex}
        styles={styles.svgWrapper}
        itemsLength={routes.length}
      />

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex
          const { options } = descriptors[route.key]

          return (
            <TabBar
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => {
                navigation.navigate(route.name)
              }}
            />
          )
        })}
      </View>
    </View>
  ) 
}

export default AnimatedTabBar
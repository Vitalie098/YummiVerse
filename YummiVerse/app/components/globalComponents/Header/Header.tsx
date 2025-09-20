import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import MenuItem from './MenuItem';
import {RouteProp, menuByScreen } from '../../../utils/header/headerProperties';
import { useRecipesMenu } from '../../../core/context/RecipesMenuCtx';
import useAnimatedHeader from '../../../helpers/hooks/useAnimatedHeader';
import Animated from 'react-native-reanimated';
import AnimatedSvg from '../AnimatedSvg';

const Header = () => {
  const [layout, setLayout] = useState<{x: number, index: number, width: number}[]>([])

  const navigation = useNavigation<any>()
  const insets = useSafeAreaInsets();
  const route = useRoute<RouteProp>();

  const {containerAnimatedStyle, contentAnimatedStyle} = useAnimatedHeader()
  const {activeIndex} = useRecipesMenu()

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    const { x, width } = event.nativeEvent.layout;

    setLayout((prev) => {
      if (prev.find(item => item.index === index)) return prev;
      return [...prev, { x, index, width }];
    });
  };

  const renderContent = () => {
    switch (route.name) {
      case 'Recipes':
      case 'Plan':
      case 'MyCoach':
      case 'Community':
        return (
          <Animated.View style={contentAnimatedStyle}>
            <View style={styles.bottomHeaderWraper}>
              {menuByScreen[route.name].map((item, index) => (
                <MenuItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  onLayout={(e) => handleLayout(e, index)}  
                />
              ))}
              {menuByScreen[route.name].length !== 0 && (
                <AnimatedSvg 
                  svgWidth={100}
                  decrease={105}
                  layout={layout}
                  svgViewBox={'0 0 190 20'}
                  styles={styles.animatedObject}
                  activeIndex={activeIndex}
                  itemsLength={menuByScreen[route.name]?.length}
                />
              )}
            </View>
          </Animated.View>
        );
      default:
        return null;
    }
  };

  return (
    <Animated.View style={containerAnimatedStyle}>
      <View style={{...styles.contentWrapper, paddingTop: Math.max(insets.top + 5, 25)}}>
        {renderContent()}
      </View>
    </Animated.View>
  )
};

export default Header;


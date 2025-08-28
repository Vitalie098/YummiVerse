import React from 'react';
import { View } from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import MenuItem from './MenuItem';
import {RouteProp, menuByScreen } from '../../../utils/header/headerProperties';

const Header = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute<RouteProp>();

  const renderContent = () => {
    switch (route.name) {
      case 'Recipes':
      case 'Plan':
      case 'MyCoach':
      case 'Community':
        return (
          <View>
            <View style={styles.bottomHeaderWraper}>
              {menuByScreen[route.name].map((item, index) => (
                <MenuItem key={index} item={item} index={index} />
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View>
      <View
        style={[
            styles.contentWrapper,
            {paddingTop: Math.max(insets.top + 5, 25)}
          ]}
        >
        {renderContent()}
      </View>
    </View>
  );
};

export default Header;
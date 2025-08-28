import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CommunityNavigatorParamList } from './types/CommunityNavigatorTypes';
import CommunityScreen from '../../screens/Community/CommunityScreen';
import Header from '../../components/globalComponents/Header';

const Stack = createNativeStackNavigator<CommunityNavigatorParamList>();

const CommunityStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <Header /> }}  initialRouteName='Community'>
      <Stack.Screen name="Community" component={CommunityScreen} />
    </Stack.Navigator>
  );
};

export default CommunityStackNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MyCoachNavigatorParamList } from './types/MyCoachNavigatorTypes';
import MyCoachScreen from '../../screens/MyCoach/MyCoachScreen';
import Header from '../../components/globalComponents/Header';

const Stack = createNativeStackNavigator<MyCoachNavigatorParamList>();

const MyCoachStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <Header /> }} initialRouteName='MyCoach'>
      <Stack.Screen name="MyCoach" component={MyCoachScreen} />
    </Stack.Navigator>
  );
};

export default MyCoachStackNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PlanNavigatorParamList } from './types/PlanNavigatorTypes';
import PlanScreen from '../../screens/Plan/PlanScreen';
import Header from '../../components/globalComponents/Header';

const Stack = createNativeStackNavigator<PlanNavigatorParamList>();

const PlanStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <Header /> }} initialRouteName='Plan' >
      <Stack.Screen name="Plan" component={PlanScreen} />
    </Stack.Navigator>
  );
};

export default PlanStackNavigator;

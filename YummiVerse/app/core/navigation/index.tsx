import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const StackApp = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <StackApp.Navigator screenOptions={{headerShown: false}}>
      <StackApp.Screen name="Main" component={BottomTabNavigator} />
    </StackApp.Navigator>
  );
};

export default AppNavigator;

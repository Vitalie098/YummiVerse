import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorParamList} from './types/BottomTabNavigatorTypes';
import RecipesStackNavigator from './RecipesStackNavigator';
import PlanStackNavigator from './PlanStackNavigator';
import CommunityStackNavigator from './CommunityStackNavigator';
import MyCoachStackNavigator from './MyCoachStackNavigator';
import {communityStackOptions, myCoachStackOptions, planStackOptions, recipesStackOptions, tabNavigatorOptions} from './options/BottomTabNavigatorOptions';
import AnimatedTabBar from '../../components/bottomTabNavigator/AnimatedTabBar';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="RecipesStack"
      screenOptions={tabNavigatorOptions}
      tabBar={props => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen
        name="RecipesStack"
        component={RecipesStackNavigator}
        options={recipesStackOptions}
      />
      <Tab.Screen
        name="PlanStack"
        component={PlanStackNavigator}
        options={planStackOptions}
      />
      <Tab.Screen
        name="CommunityStack"
        component={CommunityStackNavigator}
        options={communityStackOptions}
      />
      <Tab.Screen
        name="MyCoachStack"
        component={MyCoachStackNavigator}
        options={myCoachStackOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
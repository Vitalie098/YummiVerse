import { RouteProp } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type PlanNavigatorParamList = {
  Plan: undefined
};

export type PlanNavigationProp = NativeStackNavigationProp<
  PlanNavigatorParamList,
  'Plan'
>;

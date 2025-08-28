import { RouteProp } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ProfileNavigatorParamList = {
  Profile: undefined
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileNavigatorParamList,
  'Profile'
>;

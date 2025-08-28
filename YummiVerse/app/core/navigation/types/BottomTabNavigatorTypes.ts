import { RouteProp } from "@react-navigation/native";

export type BottomTabNavigatorParamList = {
  RecipesStack: undefined;
  PlanStack: undefined;
  CommunityStack: undefined;
  MyCoachStack: undefined;
};

export type BottomTabNavigatorProp = RouteProp<
  BottomTabNavigatorParamList,
  'RecipesStack'
>;
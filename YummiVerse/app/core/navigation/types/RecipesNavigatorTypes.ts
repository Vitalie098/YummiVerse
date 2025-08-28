import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RecipesNavigatorParamList = {
  Recipes: undefined;
};

export type RecipesNavigationProp = NativeStackNavigationProp<
  RecipesNavigatorParamList,
  'Recipes'
>;

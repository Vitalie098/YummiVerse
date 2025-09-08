import { RouteProp } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Asset } from 'react-native-image-picker';

type congratsType = "congrats" | "comment" | "photo"

export type RecipesNavigatorParamList = {
  Recipes: undefined;
  CookingMode: undefined;
  RecipeDetails: undefined;
  CommunityStories: undefined;
  Congrats: {type: congratsType};
  Share: {photo?: Asset, type: "photo" | "comment"}
  CookingListSteps: {currentIndex: number}
};

export type RecipesNavigationProp = NativeStackNavigationProp<
  RecipesNavigatorParamList,
  'Recipes'
>;

export type RecipesCongratsNavigationRouteProp = RouteProp<
  RecipesNavigatorParamList,
  "Congrats"
>;

export type RecipesResultNavigationRouteProp = RouteProp<
  RecipesNavigatorParamList,
  "Share"
>;

export type RecipesNavigationRouteProp = RouteProp<
  RecipesNavigatorParamList,
  "CookingListSteps"
>;
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesNavigatorParamList} from './types/RecipesNavigatorTypes';
import RecipesScreen from '../../screens/Recipes/RecipesScreen';
import Header from '../../components/globalComponents/Header';

const Stack = createNativeStackNavigator<RecipesNavigatorParamList>();

const RecipesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}} initialRouteName='Recipes'>
      <Stack.Screen name="Recipes" component={RecipesScreen} />
    </Stack.Navigator>
  );
};

export default RecipesStackNavigator;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesNavigatorParamList} from './types/RecipesNavigatorTypes';
import RecipesScreen from '../../screens/Recipes/RecipesScreen';
import Header from '../../components/globalComponents/Header';
import CommunityStories from '../../components/globalComponents/Modals/Recipes/CommunityStories';

const Stack = createNativeStackNavigator<RecipesNavigatorParamList>();

const RecipesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}} initialRouteName='Recipes'>
      <Stack.Screen name="Recipes" component={RecipesScreen} />
      <Stack.Screen 
        name="CommunityStories" 
        component={CommunityStories} 
        options={{ 
          headerShown: false,
          animation: 'slide_from_bottom',
          presentation: "transparentModal",
        }} 
      />
    </Stack.Navigator>
  );
};

export default RecipesStackNavigator;

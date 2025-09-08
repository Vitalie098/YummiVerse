import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesNavigatorParamList} from './types/RecipesNavigatorTypes';
import RecipesScreen from '../../screens/Recipes/RecipesScreen';
import Header from '../../components/globalComponents/Header';
import CommunityStories from '../../components/globalComponents/Modals/CommunityStories';
import RecipeDetails from '../../screens/Recipes/RecipeDetailsScreen';
import CookingMode from '../../components/globalComponents/Modals/CookingMode';
import CookingListSteps from '../../components/globalComponents/Modals/CookingMode/components/CookingListSteps';
import Congrats from '../../components/globalComponents/Modals/Congrats';
import Share from '../../components/globalComponents/Modals/Share';

const Stack = createNativeStackNavigator<RecipesNavigatorParamList>();

const RecipesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}} initialRouteName='Recipes'>
      <Stack.Screen name="Recipes" component={RecipesScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{headerShown: false}}/>
      <Stack.Group screenOptions={{ 
          presentation: 'transparentModal',
          headerShown: false,
          animation: 'slide_from_bottom'
        }}
      >
        <Stack.Screen name="Share" component={Share}/>
        <Stack.Screen name="Congrats" component={Congrats}/>
        <Stack.Screen name="CookingMode" component={CookingMode} />
        <Stack.Screen name="CookingListSteps" component={CookingListSteps} />
        <Stack.Screen name="CommunityStories" component={CommunityStories} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RecipesStackNavigator;

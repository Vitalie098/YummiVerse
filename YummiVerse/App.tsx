import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { RecipesMenuProvider } from './app/context/RecipesMenuCtx';
import AppNavigator from './app/core/navigation';

function App() {
  return (
    <SafeAreaProvider style={{flex: 1}}>
       <GestureHandlerRootView>
        <NavigationContainer>
          <RecipesMenuProvider>
            <AppNavigator />
          </RecipesMenuProvider>
        </NavigationContainer>
      </GestureHandlerRootView> 
    </SafeAreaProvider>
  );
}

export default App;
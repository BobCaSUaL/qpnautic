import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import LandingScreen from '../LandingScreen';
import { AppScreenProps } from '../types';
import HomeScreen from '../HomeScreen';
import App from '../../containers/App';


const Stack = createStackNavigator();

const baseNavigatorOptions: StackNavigationOptions = {
  headerShown: false
}

export const AppScreen = (props: AppScreenProps) => {
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen
        name="App"
        options={baseNavigatorOptions}
      >{(props) => (
        <App>
          <HomeScreen {...props} />
        </App>
      )}</Stack.Screen>
    </Stack.Navigator>
  );
};

import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HeaderDefault from '../../components/StackHeaderDefault';
import HomeScreen from '../HomeScreen';
import { LandingScreen } from './LandingScreen';

const Stack = createStackNavigator();

const baseNavigatorOptions: StackNavigationOptions = {
  header: HeaderDefault
}

export const LandingScreenNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      options={baseNavigatorOptions}
      component={LandingScreen}
    />
    <Stack.Screen
      name="Home"
      options={baseNavigatorOptions}
      component={HomeScreen}
    />
  </Stack.Navigator>
)

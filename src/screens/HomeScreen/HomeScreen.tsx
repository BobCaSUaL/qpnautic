import React from 'react';
import { ScreenProps } from '../types';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const Stack = createStackNavigator();

const baseNavigatorOptions: StackNavigationOptions = {
  headerShown: true,
}

export const HomeScreen = (props: ScreenProps) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={baseNavigatorOptions}
        getComponent={() => require('../../containers/Home').default}
      />
      <Stack.Screen
        name="Quiz"
        options={baseNavigatorOptions}
        getComponent={() => require('../HomeScreen').default}
      />
    </Stack.Navigator>
  )
};

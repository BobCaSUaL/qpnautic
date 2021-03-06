import React from 'react';
import { ScreenProps } from '../types';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import InlineHelper from '../../containers/InlineHelper';

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
        name="Exercise"
        options={baseNavigatorOptions}
        getComponent={() => require('../QuizScreen').default}
      />
      <Stack.Screen
        name="Theory"
        options={baseNavigatorOptions}
        getComponent={() => require('../TheoryScreen').default}
      />
      <Stack.Screen
        name="Quiz"
        options={baseNavigatorOptions}
        getComponent={() => require('../QuizScreen').default}
      />
      <Stack.Screen
        name="Settings"
        options={baseNavigatorOptions}
        getComponent={() => require('../SettingsScreen').default}
      />
    </Stack.Navigator>
  )
};

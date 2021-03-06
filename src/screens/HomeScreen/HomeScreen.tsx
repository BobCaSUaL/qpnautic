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
        name="Quiz"
        options={baseNavigatorOptions}
        getComponent={() => require('../HomeScreen').default}
      />
      <Stack.Screen
        name="InlineHelper"
        options={{
          ...baseNavigatorOptions,
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" }
        }}
        component={InlineHelper}
      />
    </Stack.Navigator>
  )
};

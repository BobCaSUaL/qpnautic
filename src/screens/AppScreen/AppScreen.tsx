import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HeaderDefault from '../../components/StackHeaderDefault';
import LandingScreen from '../LandingScreen';
import { AppScreenProps } from '../types';


const Stack = createStackNavigator();

const baseNavigatorOptions: StackNavigationOptions = {
  headerShown: false
}

export const AppScreen = (props: AppScreenProps) => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        options={baseNavigatorOptions}
        component={LandingScreen}
      />
      <Stack.Screen
        name="Home"
        options={baseNavigatorOptions}
        getComponent={() => require('../HomeScreen').default}
      />
    </Stack.Navigator>
  );
};

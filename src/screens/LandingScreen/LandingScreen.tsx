import React, { useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HeaderDefault from '../../components/StackHeaderDefault';
import HomeScreen from '../HomeScreen';
import { ScreenProps } from '../types';
import Landing from '../../containers/Landing';

export const LandingScreen = (props: ScreenProps) => {
  return (
    <Landing />
  );
};

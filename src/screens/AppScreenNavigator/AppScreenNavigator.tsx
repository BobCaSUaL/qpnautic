import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AppScreenProps } from '../types';
import HomeScreenNavigator from '../HomeScreenNavigator';
import App from '../../containers/App';
import InlineHelperScreen from '../InlineHelperScreen';


const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const baseNavigatorOptions: StackNavigationOptions = {
  headerShown: false
}

const modalNavigatorOptions: StackNavigationOptions = {
  ...baseNavigatorOptions,
  gestureEnabled: true,
  cardStyle: { backgroundColor: "transparent" }
}

export const AppScreenNavigator = (props: AppScreenProps) => {
  return (
    <RootStack.Navigator initialRouteName="App">
      <RootStack.Screen
        name="App"
        options={baseNavigatorOptions}
      >{(props) => (
        <App {...props}>
          <MainStack.Navigator initialRouteName="Home" mode="modal">
            <MainStack.Screen
              name="Home"
              options={baseNavigatorOptions}
              component={HomeScreenNavigator}
            />
            <MainStack.Screen
              name="InlineHelper"
              options={modalNavigatorOptions}
              component={InlineHelperScreen}
            />
          </MainStack.Navigator>
        </App>
      )}</RootStack.Screen>
    </RootStack.Navigator>
  );
};
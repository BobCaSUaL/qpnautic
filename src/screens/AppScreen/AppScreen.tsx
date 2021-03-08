import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { AppScreenProps } from '../types';
import HomeScreen from '../HomeScreen';
import InlineHelper from '../../containers/InlineHelper';
import App from '../../containers/App';


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

export const AppScreen = (props: AppScreenProps) => {
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
              component={HomeScreen}
            />
            <MainStack.Screen
              name="InlineHelper"
              options={modalNavigatorOptions}
              component={InlineHelper}
            />
          </MainStack.Navigator>
        </App>
      )}</RootStack.Screen>
    </RootStack.Navigator>
  );
};

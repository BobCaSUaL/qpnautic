import React, { useCallback } from 'react';
import { ScreenProps } from '../types';
import App from '../../containers/App';

export const LandingScreen = (props: ScreenProps) => {
  return (
    <App
      route={props.route}
      onGoToHomePress={useCallback(
        () => props.navigation.navigate("Home"),
        [props.navigation]
      )} />
  );
};

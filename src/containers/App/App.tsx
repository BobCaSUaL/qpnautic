import React from 'react';
import { Content, Button, Text } from 'native-base';
import { Route } from '@react-navigation/native';
import { mainSaga } from './saga';
import { AppContext, initialState, reducer } from './reducers';
import useSagaReducer from 'use-saga-reducer';

declare type Props = {
  route: Route<string>,
  onGoToHomePress: () => void,
}

export const App = (props: Props) => {
  const [appState, appDispatch] = useSagaReducer(mainSaga, reducer, initialState);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <Content>
        <Text>
          This is Content Section
        </Text>
        <Text>Route = {props.route.name}</Text>
        {appState.isAppLoaded && (
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={props.onGoToHomePress}
          >
            <Text>Goto Home</Text>
          </Button>
        )}
      </Content>
    </AppContext.Provider>
  )
};

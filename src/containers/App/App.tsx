import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { mainSaga } from './saga';
import { AppContext, initialState, reducer } from './reducers';
import useSagaReducer from 'use-saga-reducer';
import { ContainerProps } from '../types';
import { TouchableHelperDescriptorI, TouchableHelperContext } from '../../components/TouchableHelper';
import { appHelperShow } from './actions';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const App = (props: ContainerProps<{}> & Props) => {
  const navigation = useNavigation()
  const [appState, appDispatch] = useSagaReducer(mainSaga, reducer, initialState, undefined, {
    context: { navigation }});
  
  const handleTouchableHelpPress = useCallback((_event, item: TouchableHelperDescriptorI<{}>) => {
    appDispatch(appHelperShow(null, item))
  }, [appDispatch])

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <TouchableHelperContext.Provider value={{ handleTouchableHelpPress }}>
        {appState.isAppLoaded && props.children}
      </TouchableHelperContext.Provider>
    </AppContext.Provider>
  )
};

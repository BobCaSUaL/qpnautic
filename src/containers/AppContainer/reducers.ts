import React from 'react';
import { Action, ActionDispatcher, MetaType, PayloadType } from '../../utils/actions';
import { APP_LOADING_CANCELLED, APP_LOADING_FAILED, APP_LOADING_REQUESTED, APP_LOADING_SUCCEEDED } from './actions';

export declare interface AppState {
  isAppLoaded: boolean,
  loading: number,
}

export declare interface AppContextValue {
  appState: AppState
  appDispatch: ActionDispatcher
}

export const initialState: AppState = {
  isAppLoaded: false,
  loading: 0,
};

export const AppContext = React.createContext<AppContextValue>({
  appState: initialState,
  appDispatch: () => {},
});

export const reducer = (
  state: AppState,
  action: Action<PayloadType, MetaType>
): AppState => {
  switch (action.type) {
    case APP_LOADING_REQUESTED:
      return { ...state, loading: state.loading + 1 }
    case APP_LOADING_FAILED:
      return { ...state, loading: state.loading - 1 }
    case APP_LOADING_CANCELLED:
      return { ...state, loading: state.loading - 1 }
    case APP_LOADING_SUCCEEDED:
      return { ...state, isAppLoaded: true, loading: state.loading - 1 }

    
    default:
      return state;
  }
};
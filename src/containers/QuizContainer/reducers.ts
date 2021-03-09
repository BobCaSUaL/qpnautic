import React from 'react';
import { Action, ActionDispatcher, MetaType, PayloadType } from '../../utils/actions';
import { QUIZ_LOADING_CANCELLED, QUIZ_LOADING_FAILED, QUIZ_LOADING_REQUESTED, QUIZ_LOADING_SUCCEEDED } from './actions';

export declare interface QuizState {
  quizList: Array<any>,
  isQuizLoaded: boolean,
  loading: number,
}

export declare interface QuizContextValue {
  quizState: QuizState
  quizDispatch: ActionDispatcher
}

export const initialState: QuizState = {
  quizList: [],
  isQuizLoaded: false,
  loading: 0,
};

export const QuizContext = React.createContext<QuizContextValue>({
  quizState: initialState,
  quizDispatch: () => {},
});

export const reducer = (
  state: QuizState,
  action: Action<PayloadType, MetaType>
): QuizState => {
  switch (action.type) {
    case QUIZ_LOADING_REQUESTED:
      return { ...state, loading: state.loading + 1 }
    case QUIZ_LOADING_FAILED:
      return { ...state, loading: state.loading - 1 }
    case QUIZ_LOADING_CANCELLED:
      return { ...state, loading: state.loading - 1 }
    case QUIZ_LOADING_SUCCEEDED:
      return { ...state, quizList: action.payload as Array<any>, isQuizLoaded: true, loading: state.loading - 1 }

    
    default:
      return state;
  }
};
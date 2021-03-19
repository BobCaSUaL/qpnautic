import React from 'react';
import { Action, ActionDispatcher, MetaType, PayloadType } from '../../utils/actions';
import { shallowMutate } from '../../utils/reducers';
import { QuizFocusMetaI, QUIZ_FOCUS_CANCELLED, QUIZ_FOCUS_FAILED, QUIZ_FOCUS_REQUESTED, QUIZ_FOCUS_SUCCEEDED, QUIZ_LOADING_CANCELLED, QUIZ_LOADING_FAILED, QUIZ_LOADING_REQUESTED, QUIZ_LOADING_SUCCEEDED } from './actions';

export declare interface Quiz {
  id: number,
  question: string,
  hasPicture: false,
  correctOption: 0 | 1 | 2,
  options: [string, string, string],
}

export declare interface QuizState {
  quizList: Array<Quiz>,
  quizFocused: number,
  _quizCurrent: Readonly<Quiz | undefined>,
  isQuizLoaded: boolean,
  error: Error | null,
  loading: number,
}

export declare interface QuizContextValue {
  quizState: QuizState
  quizDispatch: ActionDispatcher
}

export const initialState: QuizState = {
  quizList: [],
  quizFocused: -1,
  get _quizCurrent() {
    return this.quizList[this.quizFocused];
  },
  isQuizLoaded: false,
  error: null,
  loading: 0,
};

export const QuizContext = React.createContext<QuizContextValue>({
  quizState: initialState,
  quizDispatch: () => {},
});

export const reducer = (
  state: QuizState,
  action: Action<PayloadType, MetaType>
): QuizState => shallowMutate(
  state,
  draft => {
    console.debug(`QuizContainer - ${action.type}`, action, draft);
  
    switch (action.type) {
      case QUIZ_LOADING_REQUESTED:
        draft.loading = draft.loading + 1;
        break;
      case QUIZ_LOADING_FAILED:
        draft.loading = draft.loading - 1;
        break;
      case QUIZ_LOADING_CANCELLED:
        draft.loading = draft.loading - 1;
        break;
      case QUIZ_LOADING_SUCCEEDED:
        draft.quizList = action.payload as Array<any>
        draft.isQuizLoaded = true
        draft.loading = draft.loading - 1;
        break;
      case QUIZ_FOCUS_REQUESTED:
        break;
      case QUIZ_FOCUS_SUCCEEDED:
        draft.quizFocused = (action.meta as QuizFocusMetaI)?.onNumber ?? -1
        break;
      case QUIZ_FOCUS_CANCELLED:
        draft.quizFocused = draft.quizFocused;
        break;
      case QUIZ_FOCUS_FAILED:
        draft.quizFocused = -1;
        draft.error = action.payload as Error;
        break;
    }
  }
);
import React from 'react';
import { Action, ActionDispatcher, MetaType, PayloadType } from '../../utils/actions';
import { shallowMutate } from '../../utils/reducers';
import {
  QuizAnswerMetaI,
  QuizAnswerPayloadI,
  QuizFocusMetaI,
  QUIZ_ANSWER_CANCELLED,
  QUIZ_ANSWER_FAILED,
  QUIZ_ANSWER_REQUESTED,
  QUIZ_ANSWER_SUCCEEDED,
  QUIZ_FOCUS_CANCELLED,
  QUIZ_FOCUS_FAILED,
  QUIZ_FOCUS_REQUESTED,
  QUIZ_FOCUS_SUCCEEDED,
  QUIZ_LOADING_CANCELLED,
  QUIZ_LOADING_FAILED,
  QUIZ_LOADING_REQUESTED,
  QUIZ_LOADING_SUCCEEDED
} from './actions';
import { Quiz, QuizId, QuizOption, QuizOptionId } from './type';

export declare interface QuizState {
  /**
   * List of the quiz (may also be a window result or page containing the quizFocused)
   */
  quizList: Array<Quiz>,
  /**
   * The current focused QuizId
   */
  quizFocused: QuizId,
  /**
   * A QuizId to QuizOptionId provided aswer list
   */
  quizAnswers: Array<{
    key: QuizId,
    value: QuizOptionId,
  }>,
  /**
   * The current #quizFocused Quiz
   */
  _quizCurrent: Readonly<Quiz | undefined>,
  /**
   * The current #quizFocused number.
   * NOTE: this may be diffent from the QuizId or the Quiz index within the quizList
   * -1 is returned if there are not any quizFocused.
   */
   _quizCurrentNumber: Readonly<number | -1>
  /**
   * The current selected anwer. It may be undefined.
   */
   _quizCurrentAnswer: Readonly<QuizOption| undefined>
  /**
   * A property to identify the first quiz loaded succeeded action
   * It would be initialized equals to false, than evaluated after the first QUIZ_LOADING_SUCCEEDED
   */
  isQuizLoaded: boolean,
  /**
   * The current Error
   */
  error: Error | null,
  /**
   * The current loading stack count
   */
  loading: number,

  getQuizIndexForId(id: QuizId): number,
  getQuizIdForIndex(index: number): QuizId,
}

export declare interface QuizContextValue {
  quizState: QuizState
  quizDispatch: ActionDispatcher
}

export const initialState: QuizState = {
  quizList: [],
  quizFocused: -1,
  quizAnswers: [],
  get _quizCurrent() {
    return this.quizList[this.getQuizIndexForId(this.quizFocused)];
  },
  get _quizCurrentNumber() {
    return this.getQuizIndexForId(this.quizFocused);
  },
  get _quizCurrentAnswer() {
    if (this._quizCurrent === undefined) {
      console.warn(`this._quizCurrent is not currently defined. quizFocused is the #${this.quizFocused}`);
      return undefined;
    }
    const currentAnswerItem = this.quizAnswers.find(({ key }) => key === this._quizCurrent?.id);
    if (currentAnswerItem == undefined) {
      return undefined;
    }
    return this._quizCurrent?.options.find(option => option.id === currentAnswerItem?.value)
  },
  isQuizLoaded: false,
  error: null,
  loading: 0,

  getQuizIndexForId(id: QuizId) {
    if (id < 0) return -1;
    return id - 1;
  },
  getQuizIdForIndex(index: number) {
    if (index < 0) return -1;
    return index + 1;
  },
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
        draft.quizFocused = draft.getQuizIdForIndex(((action.meta as QuizFocusMetaI)?.onNumber ?? -1))
        break;
      case QUIZ_FOCUS_CANCELLED:
        draft.quizFocused = draft.quizFocused;
        break;
      case QUIZ_FOCUS_FAILED:
        draft.quizFocused = -1;
        draft.error = action.payload as Error;
        break;

      case QUIZ_ANSWER_REQUESTED:
        break;
      case QUIZ_ANSWER_SUCCEEDED:
        if ((action.meta as QuizAnswerMetaI)?.onQuizId)
        draft.quizAnswers = [
          ...draft.quizAnswers.filter(quizAnswers => quizAnswers.key !== (action.meta as QuizAnswerMetaI)?.onQuizId),
          {
            key: (action.meta as QuizAnswerMetaI).onQuizId as QuizId,
            value: (action.payload as QuizAnswerPayloadI).id,
          }
        ]
        break;
      case QUIZ_ANSWER_CANCELLED:
        draft.quizFocused = draft.quizFocused;
        break;
      case QUIZ_ANSWER_FAILED:
        draft.quizFocused = -1;
        draft.error = action.payload as Error;
        break;
    }
  }
);
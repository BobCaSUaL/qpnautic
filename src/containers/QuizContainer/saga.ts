import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { takeLatest, cancelled, delay, put, select, getContext, take } from 'redux-saga/effects';
import { Action } from '../../utils/actions';
import {
  answerCancelled,
  answerFailed,
  answerSucceeded,
  focusCancelled,
  focusFailed,
  focusSucceeded,
  QuizAnswerMetaI,
  QuizAnswerPayloadI,
  QuizFocusMetaI,
  quizLoadingCancelled,
  quizLoadingFailed,
  quizLoadingRequested,
  quizLoadingSucceeded,
  QUIZ_ANSWER_REQUESTED,
  QUIZ_ANSWER_SUCCEEDED,
  QUIZ_FOCUS_REQUESTED,
  QUIZ_LOADING_REQUESTED,
} from './actions'
import { QuizState } from './reducers';
import { Quiz } from './type';


export function* quizLoadingSaga(action: Action<null, null>) {
  try {
    yield put(quizLoadingSucceeded(action.meta, require('../../../assets/quiz.json')));
  } catch(error) {
    yield put (quizLoadingFailed(action.meta, error));
  } finally {
    if (yield cancelled()) {
      yield put(quizLoadingCancelled(action.meta, null));
    }
  }
}

export function* quizFocusRequested(action: Action<null, QuizFocusMetaI>) {
  try {
    const quizList: Quiz[] = yield select((state: QuizState) => state.quizList);
    if (quizList.length <= 0) {
      yield put(quizLoadingRequested());
    }
    yield put(focusSucceeded(action.meta));
  } catch(error) {
    yield put (focusFailed(action.meta, error));
  } finally {
    if (yield cancelled()) {
      yield put(focusCancelled(action.meta, null));
    }
  }
}

export function* quizAnswerRequested(action: Action<QuizAnswerPayloadI, QuizAnswerMetaI>) {
  try {
    yield put(answerSucceeded(action.meta, action.payload));
  } catch(error) {
    yield put (answerFailed(action.meta, error));
  } finally {
    if (yield cancelled()) {
      yield put(answerCancelled(action.meta, null));
    }
  }
}

export function* quizAnswerSucceeded(action: Action<QuizAnswerPayloadI, QuizAnswerMetaI>) {
  try {
    const navigation: StackNavigationProp<ParamListBase> = yield getContext('navigation');
    const quizCurrentNumber: number = yield select((state: QuizState) => state._quizCurrentNumber);
    navigation.replace('QuizQuestion', { number: quizCurrentNumber + 1})
  } catch (error) {
    console.error(error);
  }
}

export function* mainSaga() {
  yield takeLatest(QUIZ_LOADING_REQUESTED, quizLoadingSaga)
  yield takeLatest(QUIZ_FOCUS_REQUESTED, quizFocusRequested)
  yield takeLatest(QUIZ_ANSWER_REQUESTED, quizAnswerRequested)
  yield takeLatest(QUIZ_ANSWER_SUCCEEDED, quizAnswerSucceeded)
  yield put(quizLoadingRequested());
}

import { takeLatest, cancelled, delay, put, select } from 'redux-saga/effects';
import { Action } from '../../utils/actions';
import {
  focusCancelled,
  focusFailed,
  focusSucceeded,
  QuizFocusMetaI,
  quizLoadingCancelled,
  quizLoadingFailed,
  quizLoadingRequested,
  quizLoadingSucceeded,
  QUIZ_FOCUS_REQUESTED,
  QUIZ_LOADING_REQUESTED,
} from './actions'
import { Quiz, QuizState } from './reducers';


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

export function* mainSaga() {
  yield takeLatest(QUIZ_LOADING_REQUESTED, quizLoadingSaga)
  yield takeLatest(QUIZ_FOCUS_REQUESTED, quizFocusRequested)
  yield put(quizLoadingRequested());
}
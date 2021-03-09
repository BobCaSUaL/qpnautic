import { takeLatest, cancelled, delay, put } from 'redux-saga/effects';
import { Action } from '../../utils/actions';
import {
  quizLoadingCancelled,
  quizLoadingFailed,
  quizLoadingRequested,
  quizLoadingSucceeded,
  QUIZ_LOADING_REQUESTED,
} from './actions'


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
export function* mainSaga() {
  yield takeLatest(QUIZ_LOADING_REQUESTED, quizLoadingSaga)
  yield put(quizLoadingRequested());
}
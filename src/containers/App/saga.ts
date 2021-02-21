import {takeLatest, cancelled, delay, put} from 'redux-saga/effects'
import { Action } from '../../utils/actions';
import { appLoadingCancelled, appLoadingFailed, appLoadingRequested, appLoadingSucceeded, APP_LOADING_REQUESTED } from './actions'

export function* appLoadingSaga(action: Action<null, null>) {
  try {
    yield delay(600);
    yield put(appLoadingSucceeded(action.meta, null));
  } catch(error) {
    yield put (appLoadingFailed(action.meta, error));
  } finally {
    if (yield cancelled()) {
      yield put(appLoadingCancelled(action.meta, null));
    }
  }
}

export function* mainSaga() {
  yield takeLatest(APP_LOADING_REQUESTED, appLoadingSaga)
  yield put(appLoadingRequested());
}
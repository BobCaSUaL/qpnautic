import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { takeLatest, takeLeading, cancelled, delay, put, take, getContext } from 'redux-saga/effects';
import { TouchableHelperDescriptorI } from '../../components/TouchableHelper';
import { Action } from '../../utils/actions';
import {
  appLoadingCancelled,
  appLoadingFailed,
  appLoadingRequested,
  appLoadingSucceeded,
  appHelperDismiss,
  appHelperPopulate,
  APP_LOADING_REQUESTED,
  APP_HELPER_SHOW,
  APP_HELPER_DISMISS,
  APP_HELPER_POPULATE } from './actions'

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

export function* appHelperShowSaga(action: Action<TouchableHelperDescriptorI<{}>, null>) {
  try {
    const navigation: NavigationProp<ParamListBase> = yield getContext('navigation');

    yield put(appHelperPopulate(null, action.payload))
    navigation.navigate({
      name: 'InlineHelper',
      params: { helperDescriptor: action.payload },
    });
    yield take(APP_HELPER_DISMISS);
    navigation.goBack();
  } catch (error) {
    console.error(error);
  } finally {
    if (yield cancelled()) {
      const reason = 'appHelperShowSaga has cancelled';
      yield put(appHelperDismiss({ reason }, null));
      console.warn(reason);
    }
  }
}

export function* mainSaga() {
  yield takeLatest(APP_LOADING_REQUESTED, appLoadingSaga)
  yield takeLeading(APP_HELPER_SHOW, appHelperShowSaga)
  yield put(appLoadingRequested());
}
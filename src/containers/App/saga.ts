import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { takeLatest, takeLeading, cancelled, delay, put, take, getContext } from 'redux-saga/effects';
import { TouchableHelperDescriptorI } from '../../components/TouchableHelper';
import { Action } from '../../utils/actions';
import {
  appLoadingCancelled,
  appLoadingFailed,
  appLoadingRequested,
  appLoadingSucceeded,
  APP_LOADING_REQUESTED,
  APP_HELPER_SHOW,
} from './actions'

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

    navigation.navigate({
      name: 'InlineHelper',
      key: 'inline-helper',
      params: { helperDescriptor: action.payload },
    });
  } catch (error) {
    console.error(error);
  }
}

export function* mainSaga() {
  yield takeLatest(APP_LOADING_REQUESTED, appLoadingSaga)
  yield takeLeading(APP_HELPER_SHOW, appHelperShowSaga)
  yield put(appLoadingRequested());
}
import { ActionPattern, call, cancelled, put, select, take, takeEvery, takeLatest } from "redux-saga/effects";
import { Action, ActionCreator, MetaType, PayloadType } from "./actions";

export function* resolveLatest<PRes extends PayloadType, PReq extends PayloadType, M extends MetaType>(
  pattern: ActionPattern<Action<PReq, M>>,
  worker: (action: Action<PReq, M>) => any,
  options: { succeeded: ActionCreator<PRes, M>, failed: ActionCreator<Error, M>, cancelled: ActionCreator<null, M> }
) {

  function* _worker (action: Action<PReq, M>) {
    try {
      yield put(options.succeeded(action.meta, yield worker(action)));
    } catch(error) {
      yield put(options.failed(action.meta, error));
    } finally {
      if (yield cancelled()) {
        yield put(options.cancelled(action.meta, null));
      }
    }
  }

  yield takeLatest(pattern, _worker)
}

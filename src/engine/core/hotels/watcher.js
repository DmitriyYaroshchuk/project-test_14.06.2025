import { takeEvery } from 'redux-saga/effects';
import {hotelsAsyncActions} from "./asyncActions.js";
import {callGetHotelsWorker} from "./workers/callGetHotelsWorker.js";
export function* hotelsWatcher() {
    yield takeEvery(hotelsAsyncActions.getHotelsAsync.type, callGetHotelsWorker)
}
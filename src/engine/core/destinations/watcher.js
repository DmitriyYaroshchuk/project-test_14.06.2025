import { takeEvery } from 'redux-saga/effects';
import {destinationsAsyncActions} from "./asyncActions.js";
import {callGetDestinationsWorker} from "./workers/callGetDestinationsWorker.js";
export function* destinationWatcher() {
    yield takeEvery(destinationsAsyncActions.getDestinationsAsync.type, callGetDestinationsWorker);
}
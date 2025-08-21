import { all } from 'redux-saga/effects';
import {destinationWatcher} from "../core/destinations/watcher.js";
import {hotelsWatcher} from "../core/hotels/watcher.js";
export function* rootSaga() {
    yield all([
        destinationWatcher(),
        hotelsWatcher()
    ])
}
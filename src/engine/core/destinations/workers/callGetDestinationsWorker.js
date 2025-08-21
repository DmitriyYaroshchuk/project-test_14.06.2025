import { call, put, delay } from 'redux-saga/effects';
import {setItems, setLoading} from "../slice.js";
import {api} from "../../../config/axios.js";
export function* callGetDestinationsWorker() {
    try {
        yield put(setLoading(true));
        const { data } = yield call(api.getDestinations);
        yield delay(2000);
        yield put(setItems(data));
        yield put(setLoading(false));
    } catch (error) {
        console.log(error);
    }
}
import { put, call } from "redux-saga/effects";
import {api} from "../../../config/axios.js";
import {setHasLoaded, setItems, setLoading} from "../slice.js";

export function* callGetHotelsWorker() {
    try {
        yield put(setLoading(true));
        const { data } = yield call(api.getHotels);
        yield put(setItems(data));
        yield put(setLoading(false));
        yield put(setHasLoaded(true));
    } catch (error) {
        console.log(error);
    }
}
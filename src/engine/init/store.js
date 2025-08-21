import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./rootSaga.js";
import destinationsReducer from "../core/destinations/slice.js";
import hotelsReducer from "./../core/hotels/slice.js";
import popupReducer from "./../core/popup/popupSlice.js";


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: combineReducers({
        destinations: destinationsReducer,
        hotels: hotelsReducer,
        popup: popupReducer,

    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);
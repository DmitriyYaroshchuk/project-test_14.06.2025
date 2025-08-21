import {createAction} from "@reduxjs/toolkit";

export const destinationsAsyncActions = Object.freeze({
    getDestinationsAsync: createAction('GET_DESTINATIONS'),
});
import {createSlice} from "@reduxjs/toolkit";

export const popupSlice = createSlice({
    name: "popup",
    initialState: {
        status: false
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});
export const { setStatus } = popupSlice.actions;
export default popupSlice.reducer;
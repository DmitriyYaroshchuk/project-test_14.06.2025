import {createSlice} from "@reduxjs/toolkit";

export const destinationsSlice = createSlice({
    name: "destinations",
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setItems, setLoading } = destinationsSlice.actions;
export default destinationsSlice.reducer;
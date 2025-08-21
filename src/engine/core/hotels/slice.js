import {createSlice} from "@reduxjs/toolkit";
import sortHotels from "./sortHotels.js";
import filterHotels from "./filterHotels.js";

export const hotelsSlice = createSlice({
    name: "hotels",
    initialState: {
        items: [],
        initialItems: [],
        sortedValue: '',
        loading: false,
        hasLoaded: false,
        filters: {
            countries: [],
            stars: [],
            priceRange: [0, 1000],
            withPhone: false,
        }
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
            state.initialItems = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setHasLoaded: (state, action) => {
            state.hasLoaded = action.payload;
        },
        setSortValue: (state, action) => {
            const value = action.payload;
            state.sortedValue = value;
            if (value === 'common' || value === '') {
                state.items = [...state.initialItems];
            } else {
                state.items = sortHotels([...state.items], action.payload);
            }
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
            state.items = filterHotels(state.initialItems, action.payload);
        }
    }
});
export const { setItems, setLoading, setHasLoaded, setSortValue, setFilters } = hotelsSlice.actions;
export default hotelsSlice.reducer;
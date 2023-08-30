import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    category: 'all',
    platform: 'all',
    sortBy: 'popularity'
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        },
        changeCategory: (state, action) => {
            state.page = 1;
            state.category = action.payload;
        },
        changePlatform: (state, action) => {
            state.page = 1;
            state.platform = action.payload;
        },
        changeSortBy: (state, action) => {
            state.page = 1;
            state.sortBy = action.payload;
        }
    }
});

export const { changePage, changeCategory, changePlatform, changeSortBy } = optionsSlice.actions;

export default optionsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { changePage } = optionsSlice.actions;

export default optionsSlice.reducer;
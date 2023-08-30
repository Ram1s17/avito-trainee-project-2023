import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { freeToPlayGameApi } from "../services/freeToPlayGameApi";
import optionsReducer from "./optionsSlice";


export const store = configureStore({
    reducer: {
        [freeToPlayGameApi.reducerPath]: freeToPlayGameApi.reducer,
        options: optionsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(freeToPlayGameApi.middleware),
});

setupListeners(store.dispatch);
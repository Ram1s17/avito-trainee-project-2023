import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { freeToPlayGameApi } from "../services/freeToPlayGameApi";


export const store = configureStore({
    reducer: {
        [freeToPlayGameApi.reducerPath]: freeToPlayGameApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(freeToPlayGameApi.middleware),
});

setupListeners(store.dispatch);
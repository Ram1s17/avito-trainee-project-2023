import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "./constants";

export const freeToPlayGameApi = createApi({
    reducerPath: 'freeToPlayGameApi',
    baseQuery: retry(fetchBaseQuery({ baseUrl: API_BASE_URL }), { maxRetries: 3 }),
    endpoints: (builder) => ({
        getAllGamesForCurrentPage: builder.query({
            query: ({category, platform, sortBy, page}) => `/games?category=${category}&platform=${platform}&sort-by=${sortBy}&page=${page}`
        })
    })
});

export const { useGetAllGamesForCurrentPageQuery } = freeToPlayGameApi;
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const lemmyApi = createApi({
  reducerPath: "lemmy",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({}),
});

export const {
  endpoints,
  injectEndpoints,
  enhanceEndpoints,
  reducerPath,
  reducer,
  util,
  middleware,
  internalActions,
} = lemmyApi;

export const lemmyReducers = lemmyApi.reducer;

export const lemmyMiddleware = lemmyApi.middleware;

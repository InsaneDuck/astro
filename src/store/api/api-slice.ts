import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const lemmyApi = createApi({
  reducerPath: "lemmy",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({}),
});

export const lemmyReducers = lemmyApi.reducer;

export const lemmyActions = lemmyApi.internalActions;

export const lemmyMiddleware = lemmyApi.middleware;

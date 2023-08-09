import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const lemmyApi = createApi({
  reducerPath: "lemmy",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({}),
});

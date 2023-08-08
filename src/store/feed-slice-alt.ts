// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPosts, GetPostsResponse } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";

// Define a service using a base URL and expected endpoints
export const feedAltApi = createApi({
  reducerPath: "feed-alt",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, GetPosts>({
      queryFn: async (arg, api, extraOptions) => {
        console.log(
          "fetching feed, page = " + arg.page + " sort = " + arg.sort,
        );
        const client = getLemmyHttp();
        const response = await client.getPosts(arg);
        return { data: response };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = feedAltApi;

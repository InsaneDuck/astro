// Need to use the React-specific entry point to allow generating React hooks
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import {
  BaseQueryApi,
  createApi,
  fakeBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { GetPosts, PostView } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";

const postsAdapter = createEntityAdapter<PostView>({
  selectId: (model) => model.post.id,
});
// Define a service using a base URL and expected endpoints
export const feedAltApi = createApi({
  reducerPath: "feed-alt",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query<EntityState<PostView>, GetPosts>({
      queryFn: async (arg, api: BaseQueryApi, extraOptions, baseQuery) => {
        console.log(
          "fetching feed, page = " + arg.page + " sort = " + arg.sort,
        );
        const client = getLemmyHttp();
        const response = await client.getPosts(arg);
        const posts = response.posts;
        const temp = postsAdapter.setAll(postsAdapter.getInitialState(), posts);
        return { data: temp };
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = feedAltApi;

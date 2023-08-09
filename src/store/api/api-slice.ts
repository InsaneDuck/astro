// Need to use the React-specific entry point to allow generating React hooks
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CommentResponse,
  CommunityResponse,
  CommunityView,
  GetComment,
  GetComments,
  GetCommentsResponse,
  GetCommunity,
  GetFederatedInstances,
  GetFederatedInstancesResponse,
  GetModlog,
  GetModlogResponse,
  GetPosts,
  ListCommunities,
  PostView,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";

const postsAdapter = createEntityAdapter<PostView>({
  selectId: (model) => model.post.id,
});
const listCommunitiesAdapter = createEntityAdapter<CommunityView>({
  selectId: (communityView) => communityView.community.id,
});
// Define a service using a base URL and expected endpoints
const client = getLemmyHttp();
export const lemmyApi = createApi({
  reducerPath: "lemmy",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getComment: builder.query<CommentResponse, GetComment>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getComment : " + arg);
        const data = await client.getComment(arg);
        return { data };
      },
    }),
    getComments: builder.query<GetCommentsResponse, GetComments>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getComments : " + arg);
        const data = await client.getComments(arg);
        return { data };
      },
    }),
    listCommunities: builder.query<EntityState<CommunityView>, ListCommunities>(
      {
        queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
          console.log("fetching listCommunities : " + JSON.stringify(arg));
          const communityResponse = await client.listCommunities(arg);
          const data = listCommunitiesAdapter.setAll(
            listCommunitiesAdapter.getInitialState(),
            communityResponse.communities,
          );
          return { data };
        },
      },
    ),
    getCommunity: builder.query<CommunityResponse, GetCommunity>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getCommunity : " + arg);
        const communityResponse = await client.getCommunity(arg);
        return { data: communityResponse };
      },
    }),
    getFederatedInstances: builder.query<
      GetFederatedInstancesResponse,
      GetFederatedInstances
    >({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getPosts : " + arg);
        const data = await client.getFederatedInstances(arg);
        return { data };
      },
    }),
    getModlog: builder.query<GetModlogResponse, GetModlog>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getPosts : " + arg);
        const data = await client.getModlog(arg);
        return { data };
      },
    }),
    getPosts: builder.query<EntityState<PostView>, GetPosts>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getPosts");
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
export const {
  useGetCommentQuery,
  useGetCommentsQuery,
  useGetPostsQuery,
  useGetCommunityQuery,
  useListCommunitiesQuery,
} = lemmyApi;

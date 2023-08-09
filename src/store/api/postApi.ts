import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import {
  CommentResponse,
  CommentView,
  GetComment,
  GetComments,
  GetPosts,
  PostView,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";
import { RootState } from "@/store/store";

const postsAdapter = createEntityAdapter<PostView>({
  selectId: (model) => model.post.id,
});
const commentsAdapter = createEntityAdapter<CommentView>({
  selectId: (commentView) => commentView.comment.id,
});

const postApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getComment: builder.query<CommentResponse, GetComment>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getComment : " + JSON.stringify(arg));
        const data = await getLemmyHttp().getComment(arg);
        return { data };
      },
    }),
    getComments: builder.query<EntityState<CommentView>, GetComments>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getComments : " + JSON.stringify(arg));
        const response = await getLemmyHttp().getComments(arg);
        console.log("comments count = " + response.comments.length);
        const data = commentsAdapter.setAll(
          commentsAdapter.getInitialState(),
          response.comments,
        );
        return { data };
      },
    }),
    getPosts: builder.query<EntityState<PostView>, GetPosts>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        console.log("fetching getPosts : " + JSON.stringify(arg));
        const state = api.getState() as RootState;
        console.log(state);
        const response = await getLemmyHttp().getPosts(arg);
        const posts = response.posts;
        const temp = postsAdapter.setAll(postsAdapter.getInitialState(), posts);
        return { data: temp };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetPostsQuery, useGetCommentQuery, useGetCommentsQuery } =
  postApi;

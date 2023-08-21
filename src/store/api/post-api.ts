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

const postApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getComment: builder.query<CommentResponse, GetComment>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getComment : " + JSON.stringify(arg));
        const data = await getLemmyHttp().getComment(arg);
        return { data };
      },
    }),
    getComments: builder.query<CommentView[], GetComments>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getComments : " + JSON.stringify(arg));
        const response = await getLemmyHttp().getComments(arg);
        console.log("comments count = " + response.comments.length);
        return { data: response.comments };
      },
    }),
    getPosts: builder.query<PostView[], GetPosts>({
      queryFn: async (arg: GetPosts) => {
        console.log("fetching getPosts : " + JSON.stringify(arg));
        const response = await getLemmyHttp().getPosts(arg);
        return { data: response.posts };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetCommentQuery,
  useLazyGetCommentQuery,
  useGetCommentsQuery,
  useLazyGetCommentsQuery,
} = postApi;

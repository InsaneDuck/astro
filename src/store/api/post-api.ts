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

const postApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getComment: builder.query<CommentResponse, GetComment>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log("fetching getComment : " + JSON.stringify(arg));
        const data = await getLemmyHttp(user).getComment(arg);
        return { data };
      },
    }),
    getComments: builder.query<CommentView[], GetComments>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log("fetching getComments : " + JSON.stringify(arg));
        const response = await getLemmyHttp(user).getComments(arg);
        console.log("comments count = " + response.comments.length);
        return { data: response.comments };
      },
    }),
    getPosts: builder.query<PostView[], GetPosts>({
      queryFn: async (arg: GetPosts, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log(
          "fetching getPosts : " + JSON.stringify(arg) + " url: " + user,
        );
        const response = await getLemmyHttp(user).getPosts(arg);
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

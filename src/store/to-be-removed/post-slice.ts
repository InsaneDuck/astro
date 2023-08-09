import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentSortType, CommentView, GetComments } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { RootState } from "@/store/store";

const allCommentsAdapter = createEntityAdapter<CommentView>({
  selectId: (commentView) => commentView.comment.id,
});

export type PostState = {
  postId: EntityId;
  comments: EntityState<CommentView>;
  page: number;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
  sort: CommentSortType;
};

const initialState: PostState = {
  postId: 2607271,
  comments: allCommentsAdapter.getInitialState(),
  page: 1,
  loading: "idle",
  error: "",
  sort: "Top",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setCurrentPost(state, action: PayloadAction<EntityId>) {
      state.postId = action.payload;
    },
    setCommentSort(state, action: PayloadAction<CommentSortType>) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = "pending";
      // if comments currently in store don't have same post id as post id in state then clear comments in store
      if (
        state.comments.entities[state.comments.ids[0]]?.post.id !== state.postId
      ) {
        allCommentsAdapter.setAll(state.comments, []);
      }
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<CommentView[]>) => {
        allCommentsAdapter.addMany(state.comments, action.payload);
        console.log(action.payload.length);
        state.loading = "succeeded";
        state.page++;
      },
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ? action.error.message : "";
    });
  },
});
export const fetchComments = createAsyncThunk<
  CommentView[],
  void,
  {
    state: RootState;
  }
>("comments/fetchComments", async (_, thunkAPI) => {
  const postId = thunkAPI.getState().post.postId;
  const page = thunkAPI.getState().post.page;
  const form: GetComments = {
    limit: 5,
    page,
    post_id: Number(postId),
    sort: "Top",
    max_depth: 1,
  };
  console.log("fetching comments for, ", postId);
  const client = getLemmyHttp();
  const comments = await client.getComments(form);
  //comments.map((item) => console.log("comment id = ", item.comment.id));
  return comments.comments;
});
export const postActions = postSlice.actions;

export const postReducers = postSlice.reducer;

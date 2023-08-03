import { getLemmyHttp } from "@/api/get";
import { RootState } from "@/store/store";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentSortType, CommentView, GetComments } from "lemmy-js-client";

const allCommentsAdapter = createEntityAdapter<CommentView>({
  selectId: (commentView) => commentView.comment.id,
});

export type CommentsState = {
  allComments: EntityState<CommentView>;
  page: number;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
  sort?: CommentSortType;
};

const initialState: CommentsState = {
  allComments: allCommentsAdapter.getInitialState(),
  page: 1,
  error: "",
  loading: "idle",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = "pending";
      allCommentsAdapter.setAll(state.allComments, []);
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<CommentView[]>) => {
        allCommentsAdapter.addMany(state.allComments, action.payload);
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
  const postId = thunkAPI.getState().feed.currentPost;
  const page = thunkAPI.getState().comments.page;
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

export const commentsActions = commentsSlice.actions;

export const commentsReducers = commentsSlice.reducer;

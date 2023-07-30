import { getLemmyHttp } from "@/api/get";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentSortType, CommentView } from "lemmy-js-client";

const allCommentsAdapter = createEntityAdapter<CommentView>({
  selectId: (commentView) => commentView.comment.id,
});

export type CommentsState = {
  allComments: EntityState<CommentView>;
  page: number;
  loading: boolean;
  error: string;
  sort?: CommentSortType;
};

const initialState: CommentsState = {
  allComments: allCommentsAdapter.getInitialState(),
  page: 1,
  error: "",
  loading: true,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<CommentView[]>) => {
        //state.allComments = allCommentsAdapter.getInitialState();
        state.allComments &&
          allCommentsAdapter.upsertMany(state.allComments, action.payload);
        state.loading = false;
      },
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : "";
      state.loading = false;
    });
  },
});

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (post_id: number) => {
    console.log("fetching comments");
    const client = getLemmyHttp();
    return client
      .getComments({ limit: 50, page: 1, post_id })
      .then((response) => response.comments);
  },
);

export const commentsActions = commentsSlice.actions;

export const commentsReducers = commentsSlice.reducer;

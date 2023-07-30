import { getLemmyHttp } from "@/api/get";
import { RootState } from "@/store/store";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentSortType, CommentView } from "lemmy-js-client";

const allCommentsAdapter = createEntityAdapter<CommentView>({
  selectId: (commentView) => commentView.comment.id,
});

export type CommentsState = {
  allComments: EntityState<CommentView>;
  currentPost: EntityId;
  page: number;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
  sort?: CommentSortType;
};

const initialState: CommentsState = {
  allComments: allCommentsAdapter.getInitialState(),
  currentPost: 0,
  page: 1,
  error: "",
  loading: "idle",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setPostId(state, action: PayloadAction<EntityId>) {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = "pending";
      //todo only keep comments that have same postId
    });
    builder.addCase(
      fetchComments.fulfilled,
      (state, action: PayloadAction<CommentView[]>) => {
        //state.allComments = allCommentsAdapter.getInitialState();
        if (state.allComments) {
          allCommentsAdapter.upsertMany(state.allComments, action.payload);
        }
        state.loading = "succeeded";
      },
    );
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : "";
      state.loading = "failed";
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
  const postId = thunkAPI.getState().comments.currentPost;
  console.log("fetching comments");
  const client = getLemmyHttp();
  return await client
    .getComments({ limit: 50, page: 1, post_id: Number(postId) })
    .then((response) => response.comments);
});

export const commentsActions = commentsSlice.actions;

export const commentsReducers = commentsSlice.reducer;

import { getLemmyHttp } from "@/api/get";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { PostView, SortType } from "lemmy-js-client";

const allPostsAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});

export type FeedState = {
  allPosts?: EntityState<PostView>;
  currentPost: EntityId;
  page: number;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
  sort?: SortType;
  server?: string;
  cardType?: "compact" | "expanded";
};

const initialState: FeedState = {
  allPosts: allPostsAdapter.getInitialState(),
  currentPost: 2580559,
  page: 1,
  loading: "idle",
  error: "",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setCurrentPost(state, action: PayloadAction<EntityId>) {
      state.currentPost = action.payload;
    },
    nextPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<FeedState>) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.allPosts &&
        allPostsAdapter.upsertMany(state.allPosts, action.payload);
      state.loading = "succeeded";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ? action.error.message : "";
    });
  },
});

export const fetchPosts = createAsyncThunk(
  "feed/fetchPosts",
  async (payload, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log("fetching feed");
    const client = getLemmyHttp();
    return await client
      .getPosts({ limit: 50 })
      .then((response) => response.posts);
  },
);

export const feedActions = feedSlice.actions;

export const feedReducers = feedSlice.reducer;

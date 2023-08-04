import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { RootState } from "@/store/store";
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
  feedPosts: EntityState<PostView>;
  currentPost: EntityId;
  page: number;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
  sort: SortType;
};

const initialState: FeedState = {
  feedPosts: allPostsAdapter.getInitialState(),
  currentPost: 2607271,
  page: 1,
  loading: "idle",
  error: "",
  sort: "Active",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setCurrentPost(state, action: PayloadAction<EntityId>) {
      state.currentPost = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    updateFeedBySort(state) {
      state.page = 1;
      allPostsAdapter.setAll(state.feedPosts, []);
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<FeedState>) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.feedPosts &&
        allPostsAdapter.upsertMany(state.feedPosts, action.payload);
      state.loading = "succeeded";
      state.page++;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message ? action.error.message : "";
    });
  },
});

export const fetchPosts = createAsyncThunk<
  PostView[],
  void,
  { state: RootState }
>("feed/fetchPosts", async (payload, thunkAPI) => {
  const page = thunkAPI.getState().feed.page;
  const sort = thunkAPI.getState().feed.sort;
  console.log("fetching feed, page = " + page + " sort = " + sort);
  const client = getLemmyHttp();
  return await client
    .getPosts({ page, sort, limit: 50 })
    .then((response) => response.posts);
});

export const feedActions = feedSlice.actions;

export const feedReducers = feedSlice.reducer;

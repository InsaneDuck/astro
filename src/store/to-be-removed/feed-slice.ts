import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ListingType, PostView } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { RootState } from "@/store/store";

const allPostsAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});

export type FeedState = {
  feedPosts: EntityState<PostView>;
  page: number;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string;
  type: ListingType;
};

const initialState: FeedState = {
  feedPosts: allPostsAdapter.getInitialState(),
  page: 1,
  loading: "idle",
  error: "",
  type: "All",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setType(state, action: PayloadAction<ListingType>) {
      state.type = action.payload;
    },
    updateFeedBySort(state) {
      state.page = 1;
      allPostsAdapter.setAll(state.feedPosts, []);
    },
    updateFeedByType(state) {
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
  const sort = thunkAPI.getState().shared.feedSort;
  const type = thunkAPI.getState().feed.type;
  console.log(
    "fetching feed, page = " + page + " sort = " + sort + " type = " + type,
  );
  const client = getLemmyHttp();
  return await client
    .getPosts({ page, sort, limit: 50, type_: type })
    .then((response) => response.posts);
});

export const feedActions = feedSlice.actions;

export const feedReducers = feedSlice.reducer;

const selectFeedState = (state: RootState) => state.feed;

const selectFeedPosts = createSelector(
  [selectFeedState],
  (feedState) => feedState.feedPosts,
);

const selectFeedLoading = createSelector(
  [selectFeedState],
  (feedState) => feedState.loading,
);

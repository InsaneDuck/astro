import {Optional} from '@/types/Optional';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {enableMapSet} from 'immer';
import {LemmyHttp, PostView} from 'lemmy-js-client';
//todo use map
enableMapSet();

export type FeedState1 = {
  allPosts?: {
    key: Optional<PostView>;
  };
  currentPost?: Optional<PostView>;
  page: number;
  loading: boolean;
  error: string;
};

export type FeedState = {
  allPosts?: Map<number, Optional<PostView>>;
  currentPost?: Optional<PostView>;
  page: number;
  loading: boolean;
  error: string;
};

const initialState: FeedState = {
  allPosts: new Map(),
  page: 1,
  loading: false,
  error: "",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setCurrentPost(state, action: PayloadAction<Optional<PostView>>) {
      state.currentPost = action.payload;
    },
    nextPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      action.payload.map((post) => state.allPosts?.set(post.post.id, post));
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : "";
    });
  },
});

export const fetchPosts = createAsyncThunk(
  "feed/fetchPosts",
  async (page: number) => {
    console.log("fetching");
    let baseUrl = "https://lemmy.world/";
    let client: LemmyHttp = new LemmyHttp(baseUrl, {});
    return client
      .getPosts({ limit: 50, page })
      .then((response) => response.posts);
  },
);

const equals = (post1: Optional<PostView>, post2: Optional<PostView>) => {
  return post1.post?.id === post2.post?.id;
};

const includes = (post: Optional<PostView>, array: Optional<PostView>[]) => {
  return array.some((item) => equals(item, post));
};

export const feedActions = feedSlice.actions;

export const feedReducers = feedSlice.reducer;

import { getLemmyHttp } from "@/api/get";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { PostView, SortType } from "lemmy-js-client";

const allPostsAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});

export type FeedState = {
  allPosts?: EntityState<PostView>;
  currentPost?: PostView;
  page: number;
  loading: boolean;
  error: string;
  sort?: SortType;
  server?: string;
  cardType?: "compact" | "expanded";
};

const initialState: FeedState = {
  allPosts: allPostsAdapter.getInitialState(),
  page: 1,
  loading: true,
  error: "",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setCurrentPost(state, action: PayloadAction<PostView>) {
      state.currentPost = action.payload;
    },
    nextPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<FeedState>) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.allPosts &&
        allPostsAdapter.upsertMany(state.allPosts, action.payload);
      // action.payload.map(
      //   (post) =>
      //     state.allPosts?.has(post.post.id) &&
      //     state.allPosts?.set(post.post.id, post),
      // );
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
    const client = getLemmyHttp();
    return client
      .getPosts({ limit: 50, page })
      .then((response) => response.posts);
  },
);

const equals = (post1: PostView, post2: PostView) => {
  return post1.post?.id === post2.post?.id;
};

const includes = (post: PostView, array: PostView[]) => {
  return array.some((item) => equals(item, post));
};

export const feedActions = feedSlice.actions;

export const feedReducers = feedSlice.reducer;

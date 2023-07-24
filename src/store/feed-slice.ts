import {Optional} from '@/types/Optional';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostView} from 'lemmy-js-client';
//todo use map
export type FeedState = {
  items?: Optional<PostView>[];
  currentPost?: Optional<PostView>;
};

const initialState: FeedState = {
  items: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addPosts(state, action: PayloadAction<Optional<PostView>[]>) {
      state.items?.push(...action.payload);
    },
    setCurrentPost(state, action: PayloadAction<Optional<PostView>>) {
      state.currentPost = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const feedActions = feedSlice.actions;

export const feedReducers = feedSlice.reducer;

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { PostView } from "lemmy-js-client";

export type TestFeedState = PostView;

const postViewAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});

export const testFeedSlice = createSlice({
  name: "test-feed",
  initialState: postViewAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {},
});

export const TestFeedSliceActions = testFeedSlice.actions;

export const TestFeedSliceReducers = testFeedSlice.reducer;

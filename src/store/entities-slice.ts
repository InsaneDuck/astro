import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentView, CommunityView, PostView } from "lemmy-js-client";
// todo creative name?
export type StateState = {
  allCommunities: EntityState<CommunityView>;
  communityPosts: EntityState<PostView>;
  feedPosts: EntityState<PostView>;
  postComments: EntityState<CommentView>;
  subscribedCommunities: EntityState<CommunityView>;
  userPosts: EntityState<PostView>;
};
const allCommunitiesAdapter = createEntityAdapter<CommunityView>({
  selectId: (communityView) => communityView.community.id,
});
const communityPostsAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});
const feedPostsAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});
const postCommentsAdapter = createEntityAdapter<CommentView>({
  selectId: (commentView) => commentView.comment.id,
});
const subscribedCommunitiesAdapter = createEntityAdapter<CommunityView>({
  selectId: (communityView) => communityView.community.id,
});
const userPostsAdapter = createEntityAdapter<PostView>({
  selectId: (postView) => postView.post.id,
});
const initialState: StateState = {
  allCommunities: allCommunitiesAdapter.getInitialState(),
  communityPosts: communityPostsAdapter.getInitialState(),
  feedPosts: feedPostsAdapter.getInitialState(),
  postComments: postCommentsAdapter.getInitialState(),
  subscribedCommunities: subscribedCommunitiesAdapter.getInitialState(),
  userPosts: userPostsAdapter.getInitialState(),
};

export const entitiesSlice = createSlice({
  name: "entities",
  initialState,
  reducers: {
    setFeedPosts(state, action: PayloadAction<PostView[]>) {
      feedPostsAdapter.upsertMany(state.feedPosts, action.payload);
    },
    setCommunityPosts(state, action: PayloadAction<PostView[]>) {
      if (
        state.communityPosts.entities[state.communityPosts.ids[0]]?.community
          .id === action.payload[0].community.id
      ) {
        communityPostsAdapter.upsertMany(state.communityPosts, action.payload);
      } else {
        communityPostsAdapter.setAll(state.communityPosts, action.payload);
      }
    },
  },
});

export const entitiesActions = entitiesSlice.actions;

export const entitiesReducers = entitiesSlice.reducer;

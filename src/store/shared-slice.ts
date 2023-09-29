import { createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import {
  Community,
  ListingType,
  Person,
  PostView,
  SortType,
} from "lemmy-js-client";
import { createSelector } from "reselect";

import { RootState } from "@/store/store";

export type SharedState = {
  images: string[];
  clickedPerson: Person;
  primaryPerson: Person;
  community: Community;
  postId: EntityId;
  postView?: PostView;
  feedSort: SortType;
  feedType: ListingType;
  communitySort: SortType;
};

const defaultPerson = {
  id: 0,
  name: "",
  banned: false,
  published: "",
  actor_id: "",
  local: false,
  deleted: false,
  inbox_url: "",
  admin: false,
  bot_account: false,
  instance_id: 0,
};

const defaultCommunity = {
  id: 0,
  name: "",
  title: "",
  removed: false,
  published: "",
  deleted: false,
  nsfw: false,
  actor_id: "",
  local: false,
  followers_url: "",
  inbox_url: "",
  hidden: false,
  posting_restricted_to_mods: false,
  instance_id: 0,
};

const initialState: SharedState = {
  communitySort: "Active",
  feedSort: "Active",
  feedType: "All",
  postId: 0,
  images: [],
  clickedPerson: defaultPerson,
  primaryPerson: defaultPerson,
  community: defaultCommunity,
};

export const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<string[]>) {
      state.images = action.payload;
    },
    setClickedPerson(state, action: PayloadAction<Person>) {
      state.clickedPerson = action.payload;
    },
    setPrimaryPerson(state, action: PayloadAction<Person>) {
      state.primaryPerson = action.payload;
    },
    setCommunity(state, action: PayloadAction<Community>) {
      state.community = action.payload;
    },
    setPostId(state, action: PayloadAction<EntityId>) {
      state.postId = action.payload;
    },
    setFeedSort(state, action: PayloadAction<SortType>) {
      state.feedSort = action.payload;
    },
    setFeedType(state, action: PayloadAction<ListingType>) {
      state.feedType = action.payload;
    },
    setPostView(state, action: PayloadAction<PostView>) {
      state.postView = action.payload;
    },
  },
});

export const sharedActions = sharedSlice.actions;

export const sharedReducers = sharedSlice.reducer;

export const selectShared = (state: RootState) => state.shared;

export const selectImages = createSelector(
  selectShared,
  (state) => state.images,
);

export const selectClickedPerson = createSelector(
  selectShared,
  (state) => state.clickedPerson,
);
export const selectPrimaryPerson = createSelector(
  selectShared,
  (state) => state.primaryPerson,
);

export const selectCommunity = createSelector(
  selectShared,
  (state) => state.community,
);

export const selectPostId = createSelector(
  selectShared,
  (state) => state.postId,
);

export const selectPostView = createSelector(
  selectShared,
  (state) => state.postView,
);

export const selectFeedSort = createSelector(
  selectShared,
  (state) => state.feedSort,
);

export const selectFeedType = createSelector(
  selectShared,
  (state) => state.feedType,
);

export const selectCommunitySort = createSelector(
  selectShared,
  (state) => state.communitySort,
);

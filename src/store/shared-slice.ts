import { createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import {
  Community,
  ListingType,
  Person,
  PostView,
  SortType,
} from "lemmy-js-client";

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
  },
});

export const sharedActions = sharedSlice.actions;

export const sharedReducers = sharedSlice.reducer;

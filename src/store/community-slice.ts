import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Community } from "lemmy-js-client";

export type CommunityState = {
  currentCommunity: Community;
};

const initialState: CommunityState = {
  currentCommunity: {
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
  },
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setCommunity(state, action: PayloadAction<Community>) {
      state.currentCommunity = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const communityActions = communitySlice.actions;

export const communityReducers = communitySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { CommentSortType, SortType } from "lemmy-js-client";

export type Settings = {
  blurNSFW: boolean;
  defaultPostSize: "compact" | "expanded" | "text-only";
  defaultFeedSort: SortType;
  defaultCommunitySort: SortType;
  defaultCommentSort: CommentSortType;
  defaultServerUrl: string;
  selectedPostSize: "compact" | "expanded" | "text-only";
  selectedFeedSort: SortType;
  selectedCommunitySort: SortType;
  selectedCommentSort: CommentSortType;
  selectedServerUrl: string;
  showNSFW: boolean;
  showUserNameInTabBar: boolean;
  theme: string;
};

export type SettingsState = {
  currentSettings?: Settings;
  allSettings?: Settings[];
};

const initialState: SettingsState = {};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export const settingsActions = settingsSlice.actions;

export const settingsReducers = settingsSlice.reducer;

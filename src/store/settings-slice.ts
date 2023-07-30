import { createSlice } from "@reduxjs/toolkit";
import { SortType } from "lemmy-js-client";

export type Settings = {
  blurNSFW: boolean;
  defaultFeedCardSize: "compact" | "expanded";
  defaultFeedSort: SortType;
  postCardStyle: {};
  serverUrl: string;
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

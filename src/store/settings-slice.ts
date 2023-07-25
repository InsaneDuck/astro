import { createSlice } from "@reduxjs/toolkit";

export type Settings = {
  serverUrl: string;
  showNSFW: boolean;
  blurNSFW: boolean;
  postCardStyle: {};
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

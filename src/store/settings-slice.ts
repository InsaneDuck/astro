import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";

import { defaultSettings } from "@/constants/defaultSettings";
import { Settings } from "@/types/Settings";

const allSettingsAdapter = createEntityAdapter<Settings>({
  selectId: (settings) => settings.id,
});

export type SettingsState = {
  defaultSettings: Settings;
  currentSettings: Settings;
  allSettings: EntityState<Settings>;
};
//todo get currentSettings from storage
const initialState: SettingsState = {
  defaultSettings,
  currentSettings: defaultSettings,
  allSettings: allSettingsAdapter.getInitialState(),
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setCurrentSettings(state, action: PayloadAction<Settings>) {},
    updateCurrentSettings(state, action: PayloadAction<Settings>) {
      state.currentSettings = action.payload;
    },
  },
});

export const settingsActions = settingsSlice.actions;

export const settingsReducers = settingsSlice.reducer;

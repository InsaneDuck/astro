import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentSortType, SortType } from "lemmy-js-client";

type PostSize = "compact" | "expanded" | "text-only";
type Themes = "light" | "dark";
export type Settings = {
  settingsId: number | string;
  blurNSFW: boolean;
  defaultPostSize: PostSize;
  defaultFeedSort: SortType;
  defaultCommunitySort: SortType;
  defaultCommentSort: CommentSortType;
  defaultServerUrl: string;
  selectedPostSize: PostSize;
  selectedFeedSort: SortType;
  selectedCommunitySort: SortType;
  selectedCommentSort: CommentSortType;
  selectedServerUrl: string;
  showNSFW: boolean;
  showUserNameInTabBar: boolean;
  theme: Themes;
};

const allSettingsAdapter = createEntityAdapter<Settings>({
  selectId: (settings) => settings.settingsId,
});

export type SettingsState = {
  defaultSettings: Settings;
  currentSettings: Settings;
  allSettings: EntityState<Settings>;
};

const initialState: SettingsState = {
  defaultSettings: {
    settingsId: 0,
    blurNSFW: true,
    defaultPostSize: "expanded",
    defaultFeedSort: "Active",
    defaultCommunitySort: "Active",
    defaultCommentSort: "Hot",
    defaultServerUrl: "https://lemmy.world/",
    selectedPostSize: "expanded",
    selectedFeedSort: "Active",
    selectedCommunitySort: "Active",
    selectedCommentSort: "Hot",
    selectedServerUrl: "https://lemmy.world/",
    showNSFW: false,
    showUserNameInTabBar: false,
    theme: "dark",
  },
  currentSettings: {
    settingsId: 0,
    blurNSFW: true,
    defaultPostSize: "expanded",
    defaultFeedSort: "Active",
    defaultCommunitySort: "Active",
    defaultCommentSort: "Hot",
    defaultServerUrl: "https://lemmy.world/",
    selectedPostSize: "expanded",
    selectedFeedSort: "Active",
    selectedCommunitySort: "Active",
    selectedCommentSort: "Hot",
    selectedServerUrl: "https://lemmy.world/",
    showNSFW: false,
    showUserNameInTabBar: false,
    theme: "dark",
  },
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

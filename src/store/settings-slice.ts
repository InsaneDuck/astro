import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentSortType, SortType } from "lemmy-js-client";

type PostSize = "compact" | "expanded" | "text-only";
type Theme = "light" | "dark";
export type Settings = {
  id: number | string;
  General: {
    blurNSFW: boolean;
    feedSort: SortType;
    communitySort: SortType;
    commentSort: CommentSortType;
    allowNSFW: boolean;
  };
  Appearance?: {
    postSize: PostSize;
    showUserNameInTabBar: boolean;
    theme: Theme;
  };
  Filters?: {
    keywords: string[];
  };
  FaceIdPasscode?: {
    faceId: boolean;
    passcode: boolean;
  };
  Accounts: {
    serverUrl: string;
  };
  ExportImport?: {
    data: object;
  };
};

const allSettingsAdapter = createEntityAdapter<Settings>({
  selectId: (settings) => settings.id,
});

export type SettingsState = {
  defaultSettings: Settings;
  currentSettings: Settings;
  allSettings: EntityState<Settings>;
};

const initialState: SettingsState = {
  defaultSettings: {
    id: 0,
    General: {
      feedSort: "Active",
      communitySort: "Active",
      commentSort: "Hot",
      allowNSFW: false,
      blurNSFW: false,
    },
    Appearance: {
      postSize: "expanded",
      showUserNameInTabBar: false,
      theme: "light",
    },
    Filters: {
      keywords: [],
    },
    FaceIdPasscode: {
      faceId: false,
      passcode: false,
    },
    Accounts: {
      serverUrl: "https://lemmy.world/",
    },
    ExportImport: {
      data: {},
    },
  },
  currentSettings: {
    id: 0,
    General: {
      feedSort: "Active",
      communitySort: "Active",
      commentSort: "Hot",
      allowNSFW: false,
      blurNSFW: false,
    },
    Accounts: {
      serverUrl: "https://lemmy.world/",
    },
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

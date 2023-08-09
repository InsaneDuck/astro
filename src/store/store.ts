import { configureStore } from "@reduxjs/toolkit";

import { authReducers, authSlice } from "./auth-slice";

import { lemmyApi } from "@/store/api/api-slice";
import { settingsReducers } from "@/store/settings-slice";
import { sharedReducers } from "@/store/shared-slice";
import { feedReducers } from "@/store/to-be-removed/feed-slice";
import { postReducers } from "@/store/to-be-removed/post-slice";
import { searchReducers } from "@/store/to-be-removed/search-slice";

//todo remove middleware later
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lemmyApi.middleware),
  reducer: {
    [authSlice.name]: authReducers,
    feed: feedReducers,
    post: postReducers,
    settings: settingsReducers,
    shared: sharedReducers,
    search: searchReducers,
    lemmy: lemmyApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

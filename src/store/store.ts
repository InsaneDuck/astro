import { configureStore } from "@reduxjs/toolkit";

import { authReducers } from "./auth-slice";

import { lemmyApi } from "@/store/api/api-slice";
import { settingsReducers } from "@/store/settings-slice";
import { sharedReducers } from "@/store/shared-slice";
import { feedReducers } from "@/store/to-be-removed/feed-slice";

//todo remove middleware later
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lemmyApi.middleware),
  reducer: {
    auth: authReducers,
    feed: feedReducers,
    [lemmyApi.reducerPath]: lemmyApi.reducer,
    settings: settingsReducers,
    shared: sharedReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

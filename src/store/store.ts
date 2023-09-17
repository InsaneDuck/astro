import { configureStore } from "@reduxjs/toolkit";

import { lemmyApi, lemmyReducers } from "@/store/api/api-slice";
import { settingsReducers } from "@/store/settings-slice";
import { sharedReducers } from "@/store/shared-slice";

//todo remove middleware later
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(lemmyApi.middleware),
  reducer: {
    lemmy: lemmyReducers,
    settings: settingsReducers,
    shared: sharedReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { feedReducers } from "@/store/feed-slice";
import { imageReducers } from "@/store/image-slice";
import { settingsReducers } from "@/store/settings-slice";
import { themeReducers } from "@/store/theme-slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./auth-slice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    feed: feedReducers,
    image: imageReducers,
    settings: settingsReducers,
    theme: themeReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

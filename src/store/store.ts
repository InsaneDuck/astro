import { feedReducers } from "@/store/feed-slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./auth-slice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    feed: feedReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

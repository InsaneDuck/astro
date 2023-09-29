import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { lemmyMiddleware, lemmyReducers } from "@/store/api/api-slice";
import { authReducers } from "@/store/auth-slice";
import { settingsReducers } from "@/store/settings-slice";
import { sharedReducers } from "@/store/shared-slice";

//todo remove middleware later
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lemmyMiddleware),
  reducer: {
    lemmy: lemmyReducers,
    auth: authReducers,
    settings: settingsReducers,
    shared: sharedReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from "@reduxjs/toolkit";

import { authReducers, authSlice } from "./auth-slice";

import { communityReducers } from "@/store/community-slice";
import { feedReducers } from "@/store/feed-slice";
import { imageReducers } from "@/store/image-slice";
import { postReducers } from "@/store/post-slice";
import { postsApi } from "@/store/posts-slice";
import { searchReducers } from "@/store/search-slice";
import { settingsReducers } from "@/store/settings-slice";
import { themeReducers } from "@/store/theme-slice";
import { userReducers } from "@/store/user-slice";

//todo remove middleware later
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
  reducer: {
    [authSlice.name]: authReducers,
    community: communityReducers,
    feed: feedReducers,
    image: imageReducers,
    post: postReducers,
    settings: settingsReducers,
    theme: themeReducers,
    user: userReducers,
    search: searchReducers,
    [postsApi.reducerPath]: postsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

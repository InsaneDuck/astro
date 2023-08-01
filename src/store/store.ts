import {commentsReducers} from '@/store/comments-slice';
import {feedReducers} from '@/store/feed-slice';
import {imageReducers} from '@/store/image-slice';
import {settingsReducers} from '@/store/settings-slice';
import {themeReducers} from '@/store/theme-slice';
import {configureStore} from '@reduxjs/toolkit';
import {authReducers} from './auth-slice';
//todo remove middleware later
export const store = configureStore({
  reducer: {
    auth: authReducers,
    feed: feedReducers,
    comments: commentsReducers,
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

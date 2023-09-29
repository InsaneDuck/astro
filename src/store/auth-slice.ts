import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { RootState } from "@/store/store";
import { User } from "@/types/User";

const allUsersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});
export type Accounts = {
  allUsers: EntityState<User>;
  currentUser: User;
  defaultUser: User;
};
const initialState: Accounts = {
  allUsers: allUsersAdapter.getInitialState(),
  currentUser: {
    id: 0,
    serverUrl: "https://lemmy.ml/",
    authStatus: "anonymous",
  },
  defaultUser: {
    id: 0,
    serverUrl: "https://lemmy.ml/",
    authStatus: "anonymous",
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      allUsersAdapter.addOne(state.allUsers, action.payload);
    },
    removeUser(state, action) {
      allUsersAdapter.removeOne(state.allUsers, action.payload);
    },
    updateUser(state, action) {
      allUsersAdapter.updateOne(state.allUsers, action.payload);
    },
  },
});

export const authActions = authSlice.actions;

export const authReducers = authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
export const selectCurrentUser = createSelector(selectAuth, (state) => {
  return state.currentUser ? state.currentUser : state.defaultUser;
});

export const selectCurrentServer = createSelector(selectAuth, (state) => {
  return state.currentUser
    ? state.currentUser.serverUrl
    : state.defaultUser.serverUrl;
});
export const selectAllUsers = createSelector(
  selectAuth,
  (state) => state.allUsers,
);

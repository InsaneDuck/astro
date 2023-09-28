import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from "@reduxjs/toolkit";

import { User } from "@/types/User";

const allUsersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});
export type Accounts = {
  allUsers: EntityState<User>;
  currentUser: User;
};
const initialState: Accounts = {
  allUsers: allUsersAdapter.getInitialState(),
  currentUser: {
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

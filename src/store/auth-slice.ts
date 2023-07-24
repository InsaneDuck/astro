import { User } from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  currentUser?: User;
  allUsers?: User[];
};

const initialState: AuthState = {
  currentUser: {
    serverUrl: "enterprise.lemmy.ml",
    userName: "",
    password: "",
    jwt: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthStatus() {},
    setAuthStatus() {},
  },
  extraReducers: (builder) => {},
});

export const authActions = authSlice.actions;

export const authReducers = authSlice.reducer;

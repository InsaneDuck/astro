import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Person } from "lemmy-js-client";

export type UserState = {
  currentUser?: Person;
};

const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Person>) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const userActions = userSlice.actions;

export const userReducers = userSlice.reducer;

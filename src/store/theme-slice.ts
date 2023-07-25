import { createSlice } from "@reduxjs/toolkit";

export type ThemeState = {};

const initialState: ThemeState = {};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const themeActions = themeSlice.actions;

export const themeReducers = themeSlice.reducer;

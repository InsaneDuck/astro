import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ImageState = {
  image: string[];
};

const initialState: ImageState = {
  image: [],
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImage(state: ImageState, action: PayloadAction<ImageState>) {
      state.image = action.payload.image;
    },
  },
  extraReducers: (builder) => {},
});

export const imageActions = imageSlice.actions;

export const imageReducers = imageSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetPersonDetailsResponse, Person } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { RootState } from "@/store/store";

export type UserState = {
  currentUser: Person;
};

const initialState: UserState = {
  currentUser: {
    id: 0,
    name: "",
    banned: false,
    published: "",
    actor_id: "",
    local: false,
    deleted: false,
    inbox_url: "",
    admin: false,
    bot_account: false,
    instance_id: 0,
  },
};

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

const fetchUser = createAsyncThunk<
  GetPersonDetailsResponse,
  void,
  { state: RootState }
>("user/fetchUser", async (arg, thunkAPI) => {
  const page = thunkAPI.getState().feed.page;

  console.log("fetching user, page = ", page);
  const client = getLemmyHttp();
  return await client
    .getPersonDetails({ person_id: 0 })
    .then((response) => response);
});

export const userActions = userSlice.actions;

export const userReducers = userSlice.reducer;

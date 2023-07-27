import { getLemmyHttp } from "@/api/get";
import { User } from "@/types/User";
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter<User>({
  selectId: (user) => user.userName,
});

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
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {});
    builder.addCase(login.fulfilled, (state, action) => {});
    builder.addCase(login.rejected, (state, action) => {});
  },
});

const login = createAsyncThunk("login", async () => {
  const client = getLemmyHttp();
  return client.login({
    username_or_email: "",
    password: "",
  });
});

export const authActions = authSlice.actions;

export const authReducers = authSlice.reducer;

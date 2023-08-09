import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState,
} from "@reduxjs/toolkit";
import { CommunityView } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { RootState } from "@/store/store";

const allCommunitiesAdapter = createEntityAdapter<CommunityView>({
  selectId: (communityView) => {
    return communityView.community.id;
  },
});

const listCommunitiesAdapter = createEntityAdapter<CommunityView>({
  selectId: (communityView) => {
    return communityView.community.id;
  },
});

export type SearchState = {
  allCommunities: EntityState<CommunityView>;
};

const initialState: SearchState = {
  allCommunities: allCommunitiesAdapter.getInitialState(),
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCommunities.pending, (state, action) => {
      allCommunitiesAdapter.setAll(state.allCommunities, []);
    });
    builder.addCase(fetchAllCommunities.fulfilled, (state, action) => {
      allCommunitiesAdapter.upsertMany(state.allCommunities, action.payload);
    });
    builder.addCase(fetchAllCommunities.rejected, (state, action) => {});
  },
});

export const fetchAllCommunities = createAsyncThunk<
  CommunityView[],
  void,
  { state: RootState }
>("search/fetchAllCommunities", async (_, thunkAPI) => {
  console.log("fetching all communities");
  const response = await getLemmyHttp()
    .listCommunities({ limit: 50, show_nsfw: true, sort: "TopAll" })
    .then((data) => data.communities);
  return response;
});

export const searchActions = searchSlice.actions;

export const searchReducers = searchSlice.reducer;

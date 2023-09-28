import {
  CommunityView,
  GetCommunity,
  GetCommunityResponse,
  ListCommunities,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";
import { RootState } from "@/store/store";

const communityApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    listCommunities: builder.query<CommunityView[], ListCommunities>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log("fetching listCommunities : " + JSON.stringify(arg));
        const communityResponse = await getLemmyHttp(user).listCommunities(arg);
        const data = communityResponse.communities;
        return { data };
      },
    }),
    getCommunity: builder.query<GetCommunityResponse, GetCommunity>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log("fetching getCommunity : " + JSON.stringify(arg));
        const communityResponse = await getLemmyHttp(user).getCommunity(arg);
        return { data: communityResponse };
      },
    }),
  }),
});

export const { useListCommunitiesQuery, useGetCommunityQuery } = communityApi;

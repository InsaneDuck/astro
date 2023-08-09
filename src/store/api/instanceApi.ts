import {
  GetFederatedInstances,
  GetFederatedInstancesResponse,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";

const instanceApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getFederatedInstances: builder.query<
      GetFederatedInstancesResponse,
      GetFederatedInstances
    >({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getFederatedInstances : " + JSON.stringify(arg));
        const data = await getLemmyHttp().getFederatedInstances(arg);
        return { data };
      },
    }),
  }),
});

export const { useGetFederatedInstancesQuery } = instanceApi;

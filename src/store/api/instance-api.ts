import {
  FederatedInstances,
  GetFederatedInstancesResponse,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";

const instanceApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getFederatedInstances: builder.query<
      GetFederatedInstancesResponse,
      FederatedInstances | void
    >({
      queryFn: async (_, { getState }, extraOptions, baseQuery) => {
        console.log("fetching Federated Instances");
        const data = await getLemmyHttp().getFederatedInstances();

        return { data };
      },
    }),
  }),
});

export const { useGetFederatedInstancesQuery } = instanceApi;

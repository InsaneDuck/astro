import {
  FederatedInstances,
  GetFederatedInstancesResponse,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";
import { RootState } from "@/store/store";

const instanceApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getFederatedInstances: builder.query<
      GetFederatedInstancesResponse,
      FederatedInstances | void
    >({
      queryFn: async (_, { getState }, extraOptions, baseQuery) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log("fetching Federated Instances");
        const data = await getLemmyHttp(user).getFederatedInstances();

        return { data };
      },
    }),
  }),
});

export const { useGetFederatedInstancesQuery } = instanceApi;

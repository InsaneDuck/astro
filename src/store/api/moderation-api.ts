import { GetModlog, GetModlogResponse } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";
import { RootState } from "@/store/store";

const moderationApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getModlog: builder.query<GetModlogResponse, GetModlog>({
      queryFn: async (arg, { getState }) => {
        const user = (getState() as RootState).auth.currentUser;
        console.log("fetching getModlog : " + JSON.stringify(arg));
        const data = await getLemmyHttp(user).getModlog(arg);
        return { data };
      },
    }),
  }),
});

export const { useGetModlogQuery } = moderationApi;

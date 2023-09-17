import { GetModlog, GetModlogResponse } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";

const moderationApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    getModlog: builder.query<GetModlogResponse, GetModlog>({
      queryFn: async (arg, { getState }, extraOptions, baseQuery) => {
        console.log("fetching getModlog : " + JSON.stringify(arg));
        const data = await getLemmyHttp("https://lemmy.ml/").getModlog(arg);
        return { data };
      },
    }),
  }),
});

export const { useGetModlogQuery } = moderationApi;

import { Search, SearchResponse } from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";

const searchApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchResponse, Search>({
      queryFn: async (args) => {
        const response = await getLemmyHttp().search(args);
        return { data: response };
      },
    }),
  }),
});

export const { useSearchQuery, useLazySearchQuery } = searchApi;

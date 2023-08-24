import {
  CommentView,
  CommunityView,
  PersonView,
  PostView,
  Search,
} from "lemmy-js-client";

import { getLemmyHttp } from "@/helper-functions/getLemmyHttp";
import { lemmyApi } from "@/store/api/api-slice";

export type CustomSearch =
  | PostView[]
  | PersonView[]
  | CommunityView[]
  | CommentView[];

export type CustomSearchItem =
  | PostView
  | PersonView
  | CommunityView
  | CommentView
  | undefined;

const searchApi = lemmyApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<CustomSearch, Search>({
      queryFn: async (args) => {
        console.log("fetching searchQuery : " + JSON.stringify(args));
        const response = await getLemmyHttp().search(args);
        let data: CustomSearch = [];
        switch (args.type_) {
          case "Comments":
            data = response.comments;
            break;
          case "Communities":
            data = response.communities;
            break;
          case "Posts":
            data = response.posts;
            break;
          case "Users":
            data = response.users;
            break;
        }
        return { data };
      },
    }),
  }),
});

export const { useSearchQuery, useLazySearchQuery } = searchApi;

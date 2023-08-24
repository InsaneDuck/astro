import { SearchType } from "lemmy-js-client";
import { FC } from "react";

import { AllSearchResult } from "@/app/components/Search/SearchResult/AllSearchResult";
import { CommentsSearchResult } from "@/app/components/Search/SearchResult/CommentsSearchResult";
import { CommunitiesSearchResult } from "@/app/components/Search/SearchResult/CommunitiesSearchResult";
import { PostsSearchResult } from "@/app/components/Search/SearchResult/PostsSearchResult";
import { Trending } from "@/app/components/Search/SearchResult/Trending";
import { URLSearchResult } from "@/app/components/Search/SearchResult/URLSearchResult";
import { UsersSearchResult } from "@/app/components/Search/SearchResult/UsersSearchResult";

type SearchResultProps = {
  type: SearchType;
};
export const SearchResult: FC<SearchResultProps> = (props) => {
  switch (props.type) {
    case "All":
      return <AllSearchResult />;
    case "Comments":
      return <CommentsSearchResult />;
    case "Url":
      return <URLSearchResult />;
    case "Users":
      return <UsersSearchResult />;
    case "Posts":
      return <PostsSearchResult />;
    case "Communities":
      return <CommunitiesSearchResult />;
    default:
      return <Trending />;
  }
};

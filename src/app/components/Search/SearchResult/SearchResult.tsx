import {
  CommentView,
  CommunityView,
  PersonView,
  PostView,
  Search,
} from "lemmy-js-client";
import { FC } from "react";

import { CommunityViewCard } from "@/app/components/Community/CommunityViewCard";
import { CommentViewComponent } from "@/app/components/Post/FullPost/CommentViewComponent";
import PostViewComponent from "@/app/components/Post/PostViewComponent/PostViewComponent";
import { FetchFlashList } from "@/common/FetchFlashList";
import { Text } from "@/common/Text";
import { CustomSearchItem, useSearchQuery } from "@/store/api/search-api";

type SearchResultProps = {
  args: Search;
};
export const SearchResult: FC<SearchResultProps> = (props) => {
  const { args } = props;

  const entityIdExtractor = (entity: CustomSearchItem) => {
    switch (args.type_) {
      case "Posts":
        return (entity as PostView).post.id.toString();
      case "Comments":
        return (entity as CommentView).comment.id.toString();
      case "Communities":
        return (entity as CommunityView).community.id.toString();
      case "Users":
        return (entity as PersonView).person.id.toString();
      default:
        return "";
    }
  };
  const renderItem = (item: CustomSearchItem, index: number) => {
    switch (args.type_) {
      case "Posts":
        return (
          item && <PostViewComponent postView={item as PostView} type="feed" />
        );
      case "Comments":
        return (
          item && (
            <CommentViewComponent
              commentView={item as CommentView}
              index={index}
            />
          )
        );
      case "Communities":
        return <CommunityViewCard community={item as CommunityView} />;
      case "Users":
        return item && <Text>{(item as PersonView).person.name}</Text>;
      default:
        return <></>;
    }
  };
  return (
    <FetchFlashList
      key={args.type_}
      ListHeaderComponent={() => <></>}
      entityIdExtractor={entityIdExtractor}
      estimatedItemSize={100}
      renderItem={renderItem}
      useFetch={useSearchQuery}
      requestArgs={args}
    />
  );
};

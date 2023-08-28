import { GetPosts, ListingType, PostView, SortType } from "lemmy-js-client";
import React, { FC } from "react";

import PostViewComponent from "../Post/PostViewComponent";

import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { useGetPostsQuery } from "@/store/api/post-api";

type MainFeedProps = {
  sort: SortType;
  type: ListingType;
};

export const MainFeed: FC<MainFeedProps> = (props) => {
  const { type, sort } = props;
  const args: GetPosts = { sort, type_: type, limit: 50 };
  const Header = () => <></>;
  const entityIdExtractor = (postView: PostView) => {
    return postView.post.id.toString();
  };
  const renderItem = (item: PostView | undefined, index: number) => {
    return item && <PostViewComponent postView={item} type="feed" />;
  };

  // const renderItem = (item: PostView | undefined, index: number) => {
  //   return item && <Temp post={item} index={index} />;
  // };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <FetchFlashList
        key={`${sort + type}`}
        ListHeaderComponent={Header}
        entityIdExtractor={entityIdExtractor}
        estimatedItemSize={200}
        renderItem={renderItem}
        useFetch={useGetPostsQuery}
        requestArgs={args}
      />
    </View>
  );
};

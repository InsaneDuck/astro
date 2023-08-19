import { GetPosts, ListingType, PostView, SortType } from "lemmy-js-client";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { useGetPostsQuery } from "@/store/api/post-api";
import { RootState } from "@/store/store";

export const MainFeedScreen = () => {
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);
  //return <FeedViewComponent feedType="primary" />;
  return <MainFeed type={type} sort={sort} />;
};

type MainFeedProps = {
  sort: SortType;
  type: ListingType;
};

export const MainFeed: FC<MainFeedProps> = (props) => {
  const { type, sort } = props;
  const args: GetPosts = { sort, type_: type, limit: 50 };
  const Header = () => {
    return <></>;
  };
  const entityIdExtractor = (postView: PostView) => {
    return postView.post.id.toString();
  };
  const renderItem = (item: PostView | undefined, index: number) => {
    return item && <PostViewComponent postView={item} type="feed" />;
  };
  const idExtractor = (entity: PostView) => {
    return entity.post.id.toString();
  };
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <FetchFlashList
        ListHeaderComponent={Header}
        entityIdExtractor={entityIdExtractor}
        estimatedItemSize={200}
        renderItem={renderItem}
        useFetch={useGetPostsQuery}
        requestArgs={args}
        idExtractor={idExtractor}
      />
    </View>
  );
};

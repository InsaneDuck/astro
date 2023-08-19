import { GetPosts, ListingType, PostView, SortType } from "lemmy-js-client";
import React from "react";
import { useSelector } from "react-redux";

import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { useGetPostsQuery } from "@/store/api/post-api";
import { RootState } from "@/store/store";

export const MainFeedScreen = () => {
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);

  return (
    <View style={{ width: "100%", height: "100%", flex: 1 }}>
      <Test type={type} sort={sort} />
    </View>
  );

  //return <FeedViewComponent feedType="primary" />;
};

export const Test = ({ type, sort }: { sort: SortType; type: ListingType }) => {
  const args: GetPosts = { sort, type_: type, limit: 50 };
  const Header = () => {
    return <></>;
  };
  const entityIdExtractor = (postView: PostView) => {
    return postView.post.id.toString();
  };
  const renderItem = (item: PostView, index: number) => {
    //console.log(item.post.id);

    return <PostViewComponent postView={item} type="feed" />;
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
      />
    </View>
  );
};

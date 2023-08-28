import { useNavigation } from "@react-navigation/core";
import { GetPosts, PostView } from "lemmy-js-client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CommunityViewComponent } from "@/app/components/Community/CommunityViewComponent";
import PostViewComponent from "@/app/components/Post/PostViewComponent";
import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useGetPostsQuery } from "@/store/api/post-api";
import { RootState } from "@/store/store";

export const CommunityScreen = () => {
  const community = useSelector((state: RootState) => state.shared.community);
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);
  const navigation = useNavigation<SubStackNavigation>();
  useEffect(() => {
    navigation.setOptions({
      title: community.name,
    });
  }, []);

  const args: GetPosts = {
    sort,
    community_id: community.id,
    type_: type,
    limit: 50,
  };
  const Header = () => {
    return community && <CommunityViewComponent community={community} />;
  };
  const entityIdExtractor = (postView: PostView) => {
    return postView.post.id.toString();
  };
  const renderItem = (item: PostView | undefined, index: number) => {
    return item && <PostViewComponent postView={item} type="feed" />;
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

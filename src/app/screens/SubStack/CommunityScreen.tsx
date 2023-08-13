import { useNavigation } from "@react-navigation/core";
import { EntityId } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CommunityViewComponent } from "@/app/components/Community/CommunityViewComponent";
import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { Separator } from "@/common/Separator";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useGetPostsQuery } from "@/store/api/postApi";
import { entitiesActions } from "@/store/entities-slice";
import { AppDispatch, RootState } from "@/store/store";

export const CommunityScreen = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const community = useSelector((state: RootState) => state.shared.community);
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetPostsQuery({
    community_id: community.id,
    page,
    limit: 50,
  });

  const communityPosts = useSelector(
    (state: RootState) => state.entities.communityPosts,
  );

  useEffect(() => {
    data && dispatch(entitiesActions.setCommunityPosts(data.posts));
  }, [data]);

  useEffect(() => {
    navigation.setOptions({
      title: community.name,
    });
  }, []);

  const ListHeader = () => {
    return <CommunityViewComponent community={community} />;
  };

  const ListItem = ({ item, index }: ListRenderItemInfo<EntityId>) => {
    const postView = communityPosts?.entities[item.toString()];

    return postView ? (
      <PostViewComponent postView={postView} type="feed" />
    ) : (
      <></>
    );
  };

  const onEnd = () => {
    if (!isFetching) {
      setPage((prevState) => prevState + 1);
    }
  };

  return (
    <>
      {communityPosts && (
        <FlatList
          ListHeaderComponent={ListHeader}
          data={communityPosts.ids}
          renderItem={ListItem}
          refreshing={isFetching}
          ItemSeparatorComponent={Separator}
          onEndReached={onEnd}
        />
      )}
    </>
  );
};

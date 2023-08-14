import { EntityId } from "@reduxjs/toolkit";
import { Community, ListingType, SortType } from "lemmy-js-client";
import React, { FC, useEffect, useMemo, useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CommunityViewComponent } from "@/app/components/Community/CommunityViewComponent";
import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { useGetPostsQuery } from "@/store/api/post-api";
import { entitiesActions } from "@/store/entities-slice";
import { AppDispatch, RootState } from "@/store/store";

type PostsViewComponentProps = {
  community?: Community;
  sort: SortType;
  type: ListingType;
};

export const PostsViewComponent: FC<PostsViewComponentProps> = (props) => {
  const { community, sort, type: type_ } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetPostsQuery(
    community
      ? { community_id: community.id, page, sort, limit: 50 }
      : { page, sort, type_, limit: 50 },
  );

  const posts = useSelector((state: RootState) => {
    return community ? state.entities.communityPosts : state.entities.feedPosts;
  });

  useEffect(() => {
    data &&
      dispatch(
        community
          ? entitiesActions.setCommunityPosts(data.posts)
          : entitiesActions.setFeedPosts(data.posts),
      );
  }, [data]);

  const ListHeader = () => {
    return community && <CommunityViewComponent community={community} />;
  };

  const ListItem = ({ item, index }: ListRenderItemInfo<EntityId>) => {
    const postView = posts?.entities[item.toString()];

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
  const FeedFooter = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [isFetching],
  );

  return (
    <>
      {posts && (
        <FlatList
          ListHeaderComponent={ListHeader}
          ListFooterComponent={FeedFooter}
          data={posts.ids}
          renderItem={ListItem}
          refreshing={isFetching}
          ItemSeparatorComponent={Separator}
          onEndReached={onEnd}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import {
  Community,
  GetPosts,
  ListingType,
  PostView,
  SortType,
} from "lemmy-js-client";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
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
  const {
    data: posts,
    isFetching,
    nextPage,
  } = useGetPosts(
    community
      ? { community_id: community.id, sort, limit: 50 }
      : { sort, type_, limit: 50 },
  );
  const ListHeader = () => {
    return community && <CommunityViewComponent community={community} />;
  };

  const ListItem = ({ item, index }: ListRenderItemInfo<PostView>) => {
    const postView = item;

    return postView ? (
      <PostViewComponent postView={postView} type="feed" />
    ) : (
      <></>
    );
  };

  const onEndReached = () => {
    nextPage();
  };

  const keyExtractor = (item: PostView, index: number) => {
    return item.post.id.toString();
  };

  const ListFooterComponent = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [],
  );

  return (
    <>
      <FlashList
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooterComponent}
        data={posts}
        renderItem={ListItem}
        ItemSeparatorComponent={Separator}
        onEndReached={onEndReached}
        estimatedItemSize={200}
        refreshing={isFetching}
      />
    </>
  );
};

const styles = StyleSheet.create({});

const useGetPosts = (arg: GetPosts) => {
  const { page: ignored, ...others } = arg;
  const [page, setPage] = useState(1);
  const {
    data: response,
    isFetching,
    ...otherProps
  } = useGetPostsQuery({
    page,
    ...others,
  });

  const [data, setData] = useState<PostView[]>([]);

  useEffect(() => {
    response && setData((prevState) => [...prevState, ...response.posts]);
  }, [data]);

  useEffect(() => {
    setData((prevState) =>
      response ? [...prevState, ...response.posts] : prevState,
    );
  }, [page, data]);

  const nextPage = () => {
    if (!isFetching) {
      setPage((prevState) => prevState + 1);
    }
  };

  return { data, isFetching, nextPage, ...otherProps };
};

export const PostsViewComponent1: FC<PostsViewComponentProps> = (props) => {
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

  const onEndReached = useCallback(() => {
    if (!isFetching) {
      setPage((prevState) => prevState + 1);
    }
  }, []);
  const ListFooterComponent = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [],
  );

  return (
    <>
      {posts && (
        <FlashList
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooterComponent}
          data={posts.ids}
          renderItem={ListItem}
          refreshing={isFetching}
          ItemSeparatorComponent={Separator}
          onEndReached={onEndReached}
          estimatedItemSize={200}
        />
      )}
    </>
  );
};

import { FeedCard } from "@/components/app/screens/FeedScreen/FeedCard";
import { Separator } from "@/components/app/Separator";
import { Loading } from "@/components/common/Loading";
import { fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useMemo } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type PostViewListComponentProps = {
  listType: "feed" | "community";
};

export const PostViewListComponent: FC<PostViewListComponentProps> = (
  props,
) => {
  //todo show error
  const {
    feedPosts: feed,
    loading,
    page,
    error,
  } = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch<AppDispatch>();

  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );

  const feedItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => (
      <FeedCard postId={item} index={index} />
    ),
    [],
  );

  const renderFooter = useMemo(
    () => (loading === "pending" ? <Loading style={{ padding: 100 }} /> : null),
    [loading],
  );

  const endOfLine = () => {
    if (loading !== "pending") {
      dispatch(fetchPosts());
    }
  };

  return (
    <>
      {feed ? (
        <FlatList
          data={feed?.ids}
          keyExtractor={keyExtractor}
          renderItem={feedItem}
          ItemSeparatorComponent={Separator}
          onEndReachedThreshold={0.01}
          onEndReached={endOfLine}
          refreshing={loading === "pending"}
          ListFooterComponent={renderFooter}
        />
      ) : (
        loading === "pending" && <Loading />
      )}
    </>
  );
};

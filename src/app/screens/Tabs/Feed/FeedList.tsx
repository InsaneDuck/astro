import { FeedCard } from "@/app/screens/Tabs/Feed/FeedCard";
import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { Loading } from "@/components/common/Loading";
import { fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useMemo } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedListProps = {};

export const FeedList: FC<FeedListProps> = (props) => {
  const {
    allPosts: feed,
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
    () => (loading === "pending" ? <Loading /> : null),
    [loading],
  );

  const endOfLine = () => {
    //todo fix this
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
          ItemSeparatorComponent={FeedSeparator}
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

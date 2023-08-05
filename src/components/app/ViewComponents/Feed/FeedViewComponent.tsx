import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect, useMemo } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Separator } from "@/components/app/Separator";
import { FeedCard } from "@/components/app/ViewComponents/Feed/FeedCard";
import { Loading } from "@/components/common/Loading";
import { View } from "@/components/common/View";
import { feedActions, fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";

type FeedViewComponentProps = {
  feedType: "primary" | "community" | "user";
};

export const FeedViewComponent: FC<FeedViewComponentProps> = (props) => {
  const {
    feedPosts: feed,
    loading,
    error,
  } = useSelector((state: RootState) => {
    switch (props.feedType) {
      case "primary":
        return state.feed;
      case "community":
        return state.feed;
      case "user":
        return state.feed;
    }
  });

  const sort = useSelector((state: RootState) => state.feed.sort);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(feedActions.updateFeedBySort());
    dispatch(fetchPosts());
  }, [sort, dispatch]);

  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );

  const FeedHeader = () => {
    switch (props.feedType) {
      case "primary":
        return <></>;
      case "community":
        return <></>;
      case "user":
        return <></>;
    }
  };

  const FeedItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => (
      <FeedCard postId={item} index={index} />
    ),
    [],
  );

  const FeedFooter = useMemo(
    () => (loading === "pending" ? <Loading style={{ padding: 100 }} /> : null),
    [loading],
  );

  const fetchMorePosts = () => {
    if (loading !== "pending") {
      dispatch(fetchPosts());
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
      }}
    >
      {feed ? (
        <FlatList
          data={feed?.ids}
          keyExtractor={keyExtractor}
          renderItem={FeedItem}
          ItemSeparatorComponent={Separator}
          onEndReachedThreshold={0.01}
          onEndReached={fetchMorePosts}
          refreshing={loading === "pending"}
          ListHeaderComponent={FeedHeader}
          ListFooterComponent={FeedFooter}
        />
      ) : (
        loading === "pending" && <Loading />
      )}
    </View>
  );
};

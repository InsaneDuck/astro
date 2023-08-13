import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, { FC, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FeedCard } from "@/app/components/Feed/FeedCard";
import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { View } from "@/common/View";
import { AppDispatch, RootState } from "@/store/store";
import { feedActions, fetchPosts } from "@/store/to-be-removed/feed-slice";

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

  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.feed.type);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(feedActions.updateFeedBySort());
    dispatch(feedActions.updateFeedByType());
    dispatch(fetchPosts());
  }, [sort, type, dispatch]);

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
        <FlashList
          data={feed?.ids}
          keyExtractor={keyExtractor}
          renderItem={FeedItem}
          ItemSeparatorComponent={Separator}
          onEndReachedThreshold={0.01}
          onEndReached={fetchMorePosts}
          refreshing={loading === "pending"}
          ListHeaderComponent={FeedHeader}
          ListFooterComponent={FeedFooter}
          estimatedItemSize={350}
        />
      ) : (
        loading === "pending" && <Loading />
      )}
    </View>
  );
};

import { PostViewListComponent } from "@/components/app/screens/FeedScreen/PostViewListComponent";
import { View } from "@/components/common/View";
import { feedActions, fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";

import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedProps = {};

export const Feed: FC<FeedProps> = () => {
  //todo refactor this to something proper
  const sort = useSelector((state: RootState) => state.feed.sort);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(feedActions.updateFeedBySort());
    dispatch(fetchPosts());
  }, [sort, dispatch]);

  return (
    <View style={styles.container}>
      {<PostViewListComponent listType={"feed"} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});

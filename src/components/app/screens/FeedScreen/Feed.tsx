import { FeedList } from "@/components/app/screens/FeedScreen/FeedList";
import { View } from "@/components/common/View";
import { fetchPosts } from "@/store/feed-slice";
import { AppDispatch } from "@/store/store";

import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

type FeedProps = {};

export const Feed: FC<FeedProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <View style={styles.containerSections}>{<FeedList />}</View>;
};

const styles = StyleSheet.create({
  containerSections: {
    width: "100%",
    height: "100%",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
});

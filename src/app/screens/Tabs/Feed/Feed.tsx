import { FeedList } from "@/app/screens/Tabs/Feed/FeedList";
import { Loading } from "@/components/common/Loading";
import { View } from "@/components/themed-components/View";
import { fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";

import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedProps = {};

export const Feed: FC<FeedProps> = () => {
  const { loading, page, error } = useSelector(
    (state: RootState) => state.feed,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {loading === "pending" ? <Loading /> : <FeedList />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

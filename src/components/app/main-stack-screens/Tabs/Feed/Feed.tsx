import { FeedList } from "@/components/app/main-stack-screens/Tabs/Feed/FeedList";
import { Loading } from "@/components/common/Loading";
import { View } from "@/components/common/View";
import { fetchPosts } from "@/store/feed-slice";
import { AppDispatch } from "@/store/store";

import React, { FC, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

type FeedProps = {};

export const Feed: FC<FeedProps> = () => {
  //todo replace with redux loading
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts());
    setLoading(false);
  }, [dispatch]);

  return (
    <View style={loading ? styles.loading : styles.container}>
      {loading ? <Loading /> : <FeedList />}
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

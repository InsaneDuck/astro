import FeedCard from "@/components/common/Cards/FeedCard";
import FeedSeparator from "@/components/common/FeedSeparator";
import View from "@/components/theming/ThemedComponents/View";
import { feedActions, fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EntityId } from "@reduxjs/toolkit";
import { LemmyHttp, PostView } from "lemmy-js-client";
import React, { FC, useCallback, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Feed: FC<FeedProps> = (props) => {
  const {
    allPosts: feed,
    loading,
    page,
    error,
  } = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  const endOfLine = () => {
    //todo fix this
    dispatch(feedActions.nextPage());
  };
  const renderItem = useCallback(
    (item: ListRenderItemInfo<EntityId>) => <FeedCard postId={item.item} />,
    [],
  );
  const renderFooter = useCallback(() => {
    return loading ? <ActivityIndicator size="large" color="#000" /> : null;
  }, []);
  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );
  return (
    <View style={styles.container}>
      {feed ? (
        <FlatList
          data={feed?.ids}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={FeedSeparator}
          onEndReachedThreshold={0.01}
          onEndReached={endOfLine}
          refreshing={loading}
          ListFooterComponent={renderFooter}
        />
      ) : loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : null}
    </View>
  );
};

export default Feed;

export const getPosts = async (page: number) => {
  let baseUrl = "https://lemmy.world/";
  let client: LemmyHttp = new LemmyHttp(baseUrl, {});
  let data: PostView[] = [];
  await client.getPosts({ limit: 50, page: page }).then((response) => {
    data = response.posts;
  });

  return data;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

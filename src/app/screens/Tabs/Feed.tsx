import FeedCard from "@/components/common/Cards/FeedCard";
import FeedSeparator from "@/components/common/FeedSeparator";
import View from "@/components/theming/ThemedComponents/View";
import { fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EntityId } from "@reduxjs/toolkit";

import React, { FC, useCallback, useEffect, useMemo } from "react";
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

  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => (
      <FeedCard postId={item} index={index} />
    ),
    [],
  );

  const renderFooter = useMemo(
    () => (loading ? <ActivityIndicator size="large" color="#000" /> : null),
    [loading],
  );

  const endOfLine = () => {
    //todo fix this
    //dispatch(feedActions.nextPage());
  };

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
      ) : (
        loading && <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

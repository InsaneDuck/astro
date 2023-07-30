import { Comment } from "@/app/screens/Post/Comment";
import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { View } from "@/components/themed-components/View";
import { commentsActions, fetchComments } from "@/store/comments-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useThemeColor } from "@/theming/useThemeColor";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

type SearchProps = {};
const Temp = () => {
  const color = useThemeColor("borderColor");

  const search = (
    <View style={styles.container}>
      <TextInput
        style={[styles.searchInput, { backgroundColor: color }]}
        placeholder={"Search for a User, Post or Community"}
        clearButtonMode={"always"}
      />
    </View>
  );
  return <></>;
};
export const Search: FC<SearchProps> = () => {
  const postId = useSelector((state: RootState) => state.feed.currentPost);
  const { allComments, loading, page, error } = useSelector(
    (state: RootState) => state.comments,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(commentsActions.setPostId(postId));
    dispatch(fetchComments());
  }, []);

  const commentItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => {
      //console.log("item", item);
      return <Comment commendId={item} index={index} />;
    },
    [],
  );
  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );
  return (
    <>
      {allComments && (
        <FlatList
          data={allComments?.ids}
          keyExtractor={keyExtractor}
          renderItem={commentItem}
          ItemSeparatorComponent={FeedSeparator}
          onEndReachedThreshold={0.01}
          refreshing={loading === "pending"}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  searchInput: {
    fontSize: 18,
    margin: 15,
    paddingEnd: 10,
    paddingStart: 10,
    borderRadius: 5,
    height: 45,
    width: "95%",
    color: "#ccc",
  },
});

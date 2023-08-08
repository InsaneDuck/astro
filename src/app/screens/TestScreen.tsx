import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Separator } from "@/app/components/Separator";
import { CommentThread } from "@/app/components/ViewComponents/Comment/CommentThread";
import { Text } from "@/common/Text";
import { useGetPostsQuery } from "@/store/feed-slice-alt";
import { fetchComments } from "@/store/post-slice";
import { AppDispatch, RootState } from "@/store/store";

type TestScreenProps = object;

export const TestScreen: FC<TestScreenProps> = (props) => {
  const { data, isLoading, error } = useGetPostsQuery({
    sort: "New",
    page: 1,
    limit: 50,
  });

  return (
    <ScrollView>
      {data &&
        data.posts.map((post) => (
          <Text key={post.post.id}>{post.post.id}</Text>
        ))}
    </ScrollView>
  );
};

const Comments = () => {
  const { comments, loading, page, error } = useSelector(
    (state: RootState) => state.post,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const commentItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => {
      //console.log("item", item);
      return <CommentThread commendId={item} index={index} />;
    },
    [],
  );
  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );
  return (
    <>
      {comments && (
        <FlatList
          data={comments?.ids}
          keyExtractor={keyExtractor}
          renderItem={commentItem}
          ItemSeparatorComponent={Separator}
          onEndReachedThreshold={0.01}
          refreshing={loading === "pending"}
        />
      )}
    </>
  );
};

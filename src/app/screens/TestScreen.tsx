import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Separator } from "@/app/components/Separator";
import { CommentThread } from "@/app/screens/Post/CommentThread";
import { fetchComments } from "@/store/post-slice";
import { AppDispatch, RootState } from "@/store/store";

type TestScreenProps = object;

export const TestScreen: FC<TestScreenProps> = (props) => {
  const postId = useSelector((state: RootState) => state.post.postId);
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
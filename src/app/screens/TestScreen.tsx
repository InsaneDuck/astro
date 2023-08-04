import { CommentThread } from "@/app/screens/Post/CommentThread";
import { Separator } from "@/components/app/Separator";
import { fetchComments } from "@/store/comments-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type TestScreenProps = {};

export const TestScreen: FC<TestScreenProps> = (props) => {
  const postId = useSelector((state: RootState) => state.feed.currentPost);
  const { allComments, loading, page, error } = useSelector(
    (state: RootState) => state.comments,
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
      {allComments && (
        <FlatList
          data={allComments?.ids}
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

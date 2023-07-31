import { CommentThread } from "@/app/screens/Post/CommentThread";
import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { fetchComments } from "@/store/comments-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type CommentsSectionProps = {
  posId: EntityId;
};

export const CommentsSection: FC<CommentsSectionProps> = (props) => {
  const allCommentIds = useSelector(
    (state: RootState) => state.comments.allComments.ids,
  );
  const loading = useSelector((state: RootState) => state.comments.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const commentItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => {
      return <CommentThread commendId={item} index={index} />;
    },
    [],
  );
  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );

  const endOfLine = () => {
    if (loading !== "pending") {
      //dispatch(fetchComments());
    }
  };
  return (
    allCommentIds && (
      <FlatList
        data={allCommentIds}
        keyExtractor={keyExtractor}
        renderItem={commentItem}
        ItemSeparatorComponent={FeedSeparator}
        onEndReached={endOfLine}
      />
    )
  );
};

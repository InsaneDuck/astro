import { CommentThread } from "@/app/screens/Post/CommentThread";
import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { Card } from "@/components/common/Cards/Card";
import { PostViewComponent } from "@/components/common/PostViewComponent";
import { fetchComments } from "@/store/comments-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import { PostView } from "lemmy-js-client";
import React, { FC, useCallback, useEffect, useMemo } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type CommentsSectionProps = {
  postId: EntityId;
  postView: PostView;
};

const propsAreEqual = (
  previousProps: CommentsSectionProps,
  currentProps: CommentsSectionProps,
) => {
  return previousProps.postId === currentProps.postId;
};

export const CommentsSection: FC<CommentsSectionProps> = React.memo((props) => {
  const allCommentIds = useSelector(
    (state: RootState) => state.comments.allComments.ids,
  );
  const loading = useSelector((state: RootState) => state.comments.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  const PostHeader = useMemo(() => {
    return (
      <Card>
        {<PostViewComponent postView={props.postView} type={"post"} />}
      </Card>
    );
  }, [props.postView]);

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
        ListHeaderComponent={PostHeader}
        ItemSeparatorComponent={FeedSeparator}
        onEndReached={endOfLine}
      />
    )
  );
}, propsAreEqual);

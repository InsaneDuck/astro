import { CommentThread } from "@/components/app/main-stack-screens/Post/CommentThread";
import { PostViewComponent } from "@/components/app/PostViewComponent";
import { Separator } from "@/components/app/Separator";
import { Card } from "@/components/common/Cards/Card";
import { fetchComments } from "@/store/comments-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { PostView } from "lemmy-js-client";
import React, { FC, useCallback, useEffect, useMemo } from "react";

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

  const commentItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => {
      return <CommentThread commendId={item} index={index} />;
    },
    [],
  );
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
    <FlashList
      data={allCommentIds}
      keyExtractor={keyExtractor}
      renderItem={commentItem}
      estimatedItemSize={99}
      ListHeaderComponent={PostHeader}
      ItemSeparatorComponent={Separator}
      onEndReached={endOfLine}
      refreshing={loading === "pending"}
    />
  );
}, propsAreEqual);

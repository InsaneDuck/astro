import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { PostView } from "lemmy-js-client";
import React, { FC, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Separator } from "@/app/components/Separator";
import { PostViewComponent } from "@/app/components/ViewComponents/PostViewComponent";
import { CommentThread } from "@/app/screens/Post/CommentThread";
import { Card } from "@/common/Cards/Card";
import { fetchComments } from "@/store/post-slice";
import { AppDispatch, RootState } from "@/store/store";

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

export const PostViewWithCommentsComponent: FC<CommentsSectionProps> =
  React.memo((props) => {
    const allCommentIds = useSelector(
      (state: RootState) => state.post.comments.ids,
    );
    const loading = useSelector((state: RootState) => state.post.loading);
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

    const PostHeader = useMemo(() => {
      return (
        <Card>
          <PostViewComponent postView={props.postView} type="post" />
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

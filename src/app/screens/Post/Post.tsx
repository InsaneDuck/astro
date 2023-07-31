import { CommentThread } from "@/app/screens/Post/CommentThread";
import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { Card } from "@/components/common/Cards/Card";
import { PostViewComponent } from "@/components/common/PostViewComponent";
import { commentsActions, fetchComments } from "@/store/comments-slice";
import { AppDispatch, RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useCallback, useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type PostProps = {};

export const Post: FC<PostProps> = () => {
  const postId = useSelector((state: RootState) => state.feed.currentPost);
  const post = useSelector(
    (state: RootState) => state.feed.allPosts?.entities[postId.toString()],
  );
  const { allComments, loading, page, error } = useSelector(
    (state: RootState) => state.comments,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(commentsActions.setPostId(postId));
    post?.post.id && dispatch(fetchComments());
  }, []);
  const postHeader = () => {
    return (
      <Card>{post && <PostViewComponent postView={post} type={"post"} />}</Card>
    );
  };
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
          ItemSeparatorComponent={FeedSeparator}
          onEndReachedThreshold={0.01}
          ListHeaderComponent={postHeader}
          ListFooterComponent={null}
          refreshing={loading === "pending"}
        />
      )}
    </>
  );
};

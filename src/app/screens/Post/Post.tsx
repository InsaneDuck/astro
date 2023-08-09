import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { PostView } from "lemmy-js-client";
import React, { FC, useCallback, useEffect, useMemo } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { Separator } from "@/app/components/Separator";
import { CommentThread } from "@/app/components/ViewComponents/Comment/CommentThread";
import { PostViewComponent } from "@/app/components/ViewComponents/PostViewComponent";
import { Card } from "@/common/Cards/Card";
import { View } from "@/common/View";
import { AppDispatch, RootState } from "@/store/store";
import { fetchComments } from "@/store/to-be-removed/post-slice";

type PostProps = {
  postId: EntityId;
  postView?: PostView;
};

const propsAreEqual = (previousProps: PostProps, currentProps: PostProps) => {
  return previousProps.postId === currentProps.postId;
};

const Post: FC<PostProps> = React.memo((props) => {
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
      props.postView && (
        <Card>
          <PostViewComponent postView={props.postView} type="post" />
        </Card>
      )
    );
  }, [props.postView]);

  const keyExtractor = useCallback(
    (item: EntityId, index: number) => item.toString(),
    [],
  );

  const endOfLine = () => {
    if (loading !== "pending") {
      //todo fetch more comments
      //dispatch(fetchComments());
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
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
    </View>
  );
}, propsAreEqual);

const mapStateToProps = (state: RootState) => {
  const props: PostProps = {
    postId: state.post.postId,
    postView: state.feed.feedPosts?.entities[state.post.postId],
  };
  return props;
};

export default connect(mapStateToProps)(Post);

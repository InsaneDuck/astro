import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { PostView } from "lemmy-js-client";
import React, { FC, useCallback, useMemo } from "react";
import { connect } from "react-redux";

import { CommentThread } from "@/app/components/Post/Comment/CommentThread";
import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { Card } from "@/common/Cards/Card";
import { Separator } from "@/common/Separator";
import { View } from "@/common/View";
import { useGetCommentsQuery } from "@/store/api/postApi";
import { RootState } from "@/store/store";

type PostProps = {
  postView?: PostView;
};

const propsAreEqual = (previousProps: PostProps, currentProps: PostProps) => {
  return previousProps.postView?.post.id === currentProps.postView?.post.id;
};

const PostScreen: FC<PostProps> = React.memo((props) => {
  const { data: comment, isLoading: loading } = useGetCommentsQuery({
    limit: 10,
    page: 1,
    post_id: Number(props.postView?.post.id),
    max_depth: 1,
  });

  const commentItem = useCallback(
    ({ item, index }: ListRenderItemInfo<EntityId>) => {
      return props.postView?.post.id ? (
        <CommentThread
          postId={props.postView.post.id}
          commendId={item}
          index={index}
        />
      ) : (
        <></>
      );
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
    if (loading) {
      //todo fetch more comments
      //dispatch(fetchComments());
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {comment?.ids && (
        <FlashList
          data={comment.ids}
          keyExtractor={keyExtractor}
          renderItem={commentItem}
          estimatedItemSize={99}
          ListHeaderComponent={PostHeader}
          ItemSeparatorComponent={Separator}
          onEndReached={endOfLine}
          refreshing={loading}
        />
      )}
    </View>
  );
}, propsAreEqual);

const mapStateToProps = (state: RootState) => {
  const props: PostProps = {
    postView: state.shared.postView,
  };
  return props;
};

export default connect(mapStateToProps)(PostScreen);

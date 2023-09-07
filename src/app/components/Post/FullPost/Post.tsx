import { CommentSortType, CommentView, GetComments } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CommentViewComponent } from "@/app/components/Post/FullPost/CommentViewComponent";
import PostViewComponent from "@/app/components/Post/PostViewComponent/PostViewComponent";
import { Card } from "@/common/Cards/Card";
import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { useGetCommentsQuery } from "@/store/api/post-api";
import { RootState } from "@/store/store";

type PostProps = {
  sort: CommentSortType;
};
export const Post: FC<PostProps> = (props) => {
  const postView = useSelector((state: RootState) => state.shared.postView);
  const { sort } = props;
  const args: GetComments = {
    sort: "Hot",
    limit: 10,
    post_id: Number(postView?.post.id),
    max_depth: 5,
    type_: "All",
  };

  const Header = () =>
    postView && (
      <Card>
        <PostViewComponent postView={postView} type="post" />
      </Card>
    );
  const entityIdExtractor = (commentView: CommentView) =>
    commentView.comment.id.toString();
  const renderItem = (item: CommentView | undefined, index: number) =>
    item && <CommentViewComponent commentView={item} index={index} />;

  return (
    <View>
      <FetchFlashList
        ListHeaderComponent={Header}
        entityIdExtractor={entityIdExtractor}
        estimatedItemSize={200}
        renderItem={renderItem}
        useFetch={useGetCommentsQuery}
        requestArgs={args}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

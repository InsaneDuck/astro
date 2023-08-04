import { CommentsSection } from "@/components/app/screens/Post/CommentsSection";
import { Loading } from "@/components/common/Loading";
import { View } from "@/components/common/View";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type PostProps = {};

export const Post: FC<PostProps> = () => {
  const postId = useSelector((state: RootState) => state.feed.currentPost);
  const post = useSelector(
    (state: RootState) => state.feed.feedPosts?.entities[postId.toString()],
  );

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {post ? <CommentsSection postId={postId} postView={post} /> : <Loading />}
    </View>
  );
};

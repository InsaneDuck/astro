import { CommentsSection } from "@/app/screens/Post/CommentsSection";
import { Loading } from "@/components/common/Loading";
import { View } from "@/components/themed-components/View";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type PostProps = {};

export const Post: FC<PostProps> = () => {
  const postId = useSelector((state: RootState) => state.feed.currentPost);
  const post = useSelector(
    (state: RootState) => state.feed.allPosts?.entities[postId.toString()],
  );

  //<ScrollView>{PostHeader}</ScrollView>
  return (
    <View>
      {post ? <CommentsSection postId={postId} postView={post} /> : <Loading />}
    </View>
  );
};

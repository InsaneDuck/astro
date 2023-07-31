import { CommentsSection } from "@/app/screens/Post/CommentsSection";
import { Card } from "@/components/common/Cards/Card";
import { PostViewComponent } from "@/components/common/PostViewComponent";
import { RootState } from "@/store/store";
import React, { FC, useMemo } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

type PostProps = {};

export const Post: FC<PostProps> = () => {
  const postId = useSelector((state: RootState) => state.feed.currentPost);
  const post = useSelector(
    (state: RootState) => state.feed.allPosts?.entities[postId.toString()],
  );

  const PostHeader = useMemo(() => {
    return (
      <Card>{post && <PostViewComponent postView={post} type={"post"} />}</Card>
    );
  }, [post]);

  return (
    <>
      <ScrollView>{PostHeader}</ScrollView>
      <CommentsSection posId={postId} />
    </>
  );
};

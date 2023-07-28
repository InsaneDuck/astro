import { FullPostContent } from "@/app/screens/Post/FullPostContent";
import { Card } from "@/components/common/Cards/Card";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type PostProps = {};

export const Post: FC<PostProps> = () => {
  const post = useSelector((state: RootState) => state.feed.currentPost);

  return <Card>{post && <FullPostContent postView={post} />}</Card>;
};

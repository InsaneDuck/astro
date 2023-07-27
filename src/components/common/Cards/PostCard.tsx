import Card from "@/components/common/Cards/Card";
import MinimalPostContent from "@/components/common/Cards/MinimalPostContent";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type PostCardProps = {};

const PostCard: FC<PostCardProps> = (props) => {
  const post = useSelector((state: RootState) => state.feed.currentPost);

  return <Card>{post && <MinimalPostContent postView={post} />}</Card>;
};

export default PostCard;

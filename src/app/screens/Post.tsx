import Card from "@/components/common/Cards/Card";
import FullPostContent from "@/components/common/Cards/FullPostContent";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type PostProps = {};

const Post: FC<PostProps> = (props) => {
  const post = useSelector((state: RootState) => state.feed.currentPost);

  return <Card>{post && <FullPostContent postView={post} />}</Card>;
};

export default Post;

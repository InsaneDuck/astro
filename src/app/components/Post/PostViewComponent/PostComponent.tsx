import { PostView } from "lemmy-js-client";
import { FC } from "react";
import { StyleSheet } from "react-native";

import { PostViewFeed } from "@/app/components/Post/PostViewComponent/PostViewFeed";
import { PostViewPost } from "@/app/components/Post/PostViewComponent/PostViewPost";

type PostComponentProps = {
  postView: PostView;
  type: "feed" | "post";
};
export const PostComponent: FC<PostComponentProps> = (props) => {
  return props.type === "feed" ? (
    <PostViewFeed postView={props.postView} />
  ) : (
    <PostViewPost postView={props.postView} />
  );
};

const styles = StyleSheet.create({});

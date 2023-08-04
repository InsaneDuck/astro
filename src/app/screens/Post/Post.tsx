import { PostViewWithCommentsComponent } from "@/app/screens/Post/PostViewWithCommentsComponent";
import { Loading } from "@/components/common/Loading";
import { View } from "@/components/common/View";
import { RootState } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import { CommentSortType } from "lemmy-js-client";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

type PostProps = {};
/**
 * Displays Post when clicking on a post anywhere in app
 */
export const Post: FC<PostProps> = () => {
  const postId = useSelector((state: RootState) => state.post.postId);
  const post = useSelector(
    (state: RootState) => state.feed.feedPosts?.entities[postId.toString()],
  );
  const navigation = useNavigation();
  let commentSort: CommentSortType = "New";

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {},
    });
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {post ? (
        <PostViewWithCommentsComponent postId={postId} postView={post} />
      ) : (
        <Loading />
      )}
    </View>
  );
};

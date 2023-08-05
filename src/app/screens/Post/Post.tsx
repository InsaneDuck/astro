import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CommentsSorter } from "@/app/components/ViewComponents/Post/CommentsSorter";
import { PostViewWithCommentsComponent } from "@/app/screens/Post/PostViewWithCommentsComponent";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { RootState } from "@/store/store";

/**
 * Displays Post when clicking on a post anywhere in app
 */
export const Post = () => {
  const postId = useSelector((state: RootState) => state.post.postId);
  const post = useSelector(
    (state: RootState) => state.feed.feedPosts?.entities[postId.toString()],
  );
  const navigation = useNavigation<SubStackNavigation>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: CommentsSorter,
    });
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {post && (
        <PostViewWithCommentsComponent postId={postId} postView={post} />
      )}
    </View>
  );
};

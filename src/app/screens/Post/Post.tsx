import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { PostViewWithCommentsComponent } from "@/app/screens/Post/PostViewWithCommentsComponent";
import { CommentsSorter } from "@/components/app/ViewComponents/Post/CommentsSorter";
import { View } from "@/components/common/View";
import { FeedStackNavigation } from "@/router/tabs/FeedStackLayout";
import { RootState } from "@/store/store";

/**
 * Displays Post when clicking on a post anywhere in app
 */
export const Post = () => {
  const postId = useSelector((state: RootState) => state.post.postId);
  const post = useSelector(
    (state: RootState) => state.feed.feedPosts?.entities[postId.toString()],
  );
  const navigation = useNavigation<FeedStackNavigation>();

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

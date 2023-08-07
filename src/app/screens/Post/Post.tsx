import React from "react";
import { useSelector } from "react-redux";

import { FullPostViewComponent } from "@/app/components/ViewComponents/FullPost/FullPostViewComponent";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

/**
 * Displays Post when clicking on a post anywhere in app
 */
export const Post = () => {
  const postId = useSelector((state: RootState) => state.post.postId);
  const post = useSelector(
    (state: RootState) => state.feed.feedPosts?.entities[postId.toString()],
  );

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {post && <FullPostViewComponent postId={postId} postView={post} />}
    </View>
  );
};

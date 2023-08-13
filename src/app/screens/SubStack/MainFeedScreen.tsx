import React from "react";
import { useSelector } from "react-redux";

import { PostsViewComponent } from "@/app/components/PostsViewComponent";
import { RootState } from "@/store/store";

export const MainFeedScreen = () => {
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);

  return <PostsViewComponent type={type} sort={sort} />;
  //return <FeedViewComponent feedType="primary" />;
};

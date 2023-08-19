import React from "react";
import { useSelector } from "react-redux";

import { MainFeed } from "@/app/components/Feed/MainFeed";
import { RootState } from "@/store/store";

export const MainFeedScreen = () => {
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);
  //return <FeedViewComponent feedType="primary" />;
  return <MainFeed type={type} sort={sort} />;
};

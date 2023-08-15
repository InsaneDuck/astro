import React from "react";
import { useSelector } from "react-redux";

import { Test } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

export const MainFeedScreen = () => {
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);

  return (
    <View style={{ width: "100%", height: "100%", flex: 1 }}>
      <Test type={type} sort={sort} />
    </View>
  );

  //return <FeedViewComponent feedType="primary" />;
};

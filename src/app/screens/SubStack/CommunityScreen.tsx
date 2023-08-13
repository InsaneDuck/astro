import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { PostsViewComponent } from "@/app/components/PostsViewComponent";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { RootState } from "@/store/store";

export const CommunityScreen = () => {
  const community = useSelector((state: RootState) => state.shared.community);
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const type = useSelector((state: RootState) => state.shared.feedType);
  const navigation = useNavigation<SubStackNavigation>();
  useEffect(() => {
    navigation.setOptions({
      title: community.name,
    });
  }, []);
  return community ? (
    <PostsViewComponent type={type} sort={sort} community={community} />
  ) : (
    <PostsViewComponent type={type} sort={sort} />
  );
};

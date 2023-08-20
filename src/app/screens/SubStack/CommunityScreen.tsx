import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { CommunityViewComponent } from "@/app/components/Community/CommunityViewComponent";
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
  return community && <CommunityViewComponent community={community} />;
};

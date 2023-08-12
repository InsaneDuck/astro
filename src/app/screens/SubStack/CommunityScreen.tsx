import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { CommunityViewComponent } from "@/app/components/ViewComponents/Community/CommunityViewComponent";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { RootState } from "@/store/store";

export const CommunityScreen = () => {
  const community = useSelector((state: RootState) => state.shared.community);
  const navigation = useNavigation<SubStackNavigation>();
  useEffect(() => {
    navigation.setOptions({
      title: community.name,
    });
  }, []);
  return <CommunityViewComponent community={community} />;
};

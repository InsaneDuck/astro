import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Icon } from "@/common/Icon";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useThemeColor } from "@/theming/useThemeColor";

export const CommunityButtons = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const tabIconDefault = useThemeColor("tabIconDefault");
  const showCommunityInfo = (): any => {
    navigation.navigate("CommunityInfo");
  };
  const showCreatePost = (): any => {
    navigation.navigate("CreatePost");
  };
  return (
    <>
      <TouchableOpacity onPress={showCreatePost}>
        <Icon icon="plus" color={tabIconDefault} />
      </TouchableOpacity>
      <TouchableOpacity onPress={showCommunityInfo} style={{ marginLeft: 10 }}>
        <Icon icon="info-circle" color={tabIconDefault} />
      </TouchableOpacity>
    </>
  );
};

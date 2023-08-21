import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Icon } from "@/common/Icon";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useThemeColor } from "@/theming/useThemeColor";

export const CommunityHeaderRight = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const tabIconDefault = useThemeColor("tabIconDefault");
  const onPressCommunityInfo = (): any => {
    navigation.navigate("CommunityInfo");
  };
  const onPressCreatePost = (): any => {
    navigation.navigate("CreatePost");
  };
  return (
    <>
      <TouchableOpacity onPress={onPressCreatePost}>
        <Icon icon="plus" color={tabIconDefault} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressCommunityInfo}
        style={{ marginLeft: 10 }}
      >
        <Icon icon="info-circle" color={tabIconDefault} />
      </TouchableOpacity>
    </>
  );
};

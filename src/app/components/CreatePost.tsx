import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Icon } from "@/common/Icon";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useThemeColor } from "@/theming/useThemeColor";

export const CreatePost = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const tabIconDefault = useThemeColor("tabIconDefault");
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("CommunityInfo")}>
        <Icon icon="plus" color={tabIconDefault} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CommunityInfo")}
        style={{ marginLeft: 10 }}
      >
        <Icon icon="info-circle" color={tabIconDefault} />
      </TouchableOpacity>
    </>
  );
};

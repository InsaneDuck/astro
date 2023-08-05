import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { Icon } from "@/common/Icon";
import { useThemeColor } from "@/theming/useThemeColor";

type ImageEditButtonProps = {
  type: "user-banner" | "user-avatar" | "community-banner" | "community-avatar";
};

export const ImageEditButton: FC<ImageEditButtonProps> = (props) => {
  const tabIconDefault = useThemeColor("tabIconDefault");
  //todo add ability to upload image on press
  return (
    <TouchableOpacity
      style={{ right: 0, bottom: 0, position: "absolute", margin: 10 }}
    >
      <Icon icon="edit" color={tabIconDefault} size={20} />
    </TouchableOpacity>
  );
};

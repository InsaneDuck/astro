import React from "react";
import { TouchableOpacity } from "react-native";

import { Icon } from "@/common/Icon";
import { useThemeColor } from "@/theming/useThemeColor";

export const ImageViewerButtons = () => {
  const iconColor = useThemeColor("tint");
  const onSave = () => {
    //CameraRoll.save();
  };
  return (
    <>
      <TouchableOpacity onPress={onSave}>
        <Icon
          icon="save"
          color={iconColor}
          size={25}
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>

      <Icon
        icon="arrow-up-from-bracket"
        color={iconColor}
        size={25}
        style={{ marginLeft: 20 }}
      />
    </>
  );
};

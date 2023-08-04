import { Icon } from "@/components/common/Icon";
import { useThemeColor } from "@/components/theming/useThemeColor";
import React, { FC } from "react";

type ImageViewerButtonsProps = {};

export const ImageViewerButtons: FC<ImageViewerButtonsProps> = (props) => {
  const iconColor = useThemeColor("tint");
  return (
    <>
      <Icon
        icon={"save"}
        color={iconColor}
        size={25}
        style={{ marginLeft: 20 }}
      />

      <Icon
        icon={"arrow-up-from-bracket"}
        color={iconColor}
        size={25}
        style={{ marginLeft: 20 }}
      />
    </>
  );
};

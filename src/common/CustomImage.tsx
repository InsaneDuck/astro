import React, { FC } from "react";
import { Image as DefaultImage, TouchableOpacity } from "react-native";

import { Press } from "@/theming/Themed";

type ImageProps = {
  onPress?: Press;
} & DefaultImage["props"];

export const CustomImage: FC<ImageProps> = (props) => {
  const { onPress, ...otherProps } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: "auto", height: "auto" }}
    >
      <DefaultImage {...otherProps} />
    </TouchableOpacity>
  );
};

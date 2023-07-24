import { Press } from "@/components/theming/Themed";
import React, { FC } from "react";
import { Image as DefaultImage, Pressable } from "react-native";

type ImageProps = {
  onPress?: Press;
} & DefaultImage["props"];

const Image: FC<ImageProps> = (props) => {
  const { onPress, ...otherProps } = props;
  return (
    <Pressable onPress={onPress}>
      <DefaultImage {...otherProps} />
    </Pressable>
  );
};

export default Image;

import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC, memo } from "react";
import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

export const Text: FC<TextProps> = memo((props) => {
  const { style, ...otherProps } = props;
  const color = useThemeColor("text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
});

import { ClickProps, ThemeProps } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC, memo } from "react";
import { Pressable, Text as DefaultText } from "react-native";

export type TextProps = ClickProps & ThemeProps & DefaultText["props"];

export const Text: FC<TextProps> = memo((props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor("text");

  return (
    <>
      <Pressable onPress={props.onPress}>
        <DefaultText style={[{ color }, style]} {...otherProps} />
      </Pressable>
    </>
  );
});

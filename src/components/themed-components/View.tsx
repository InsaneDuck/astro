import { ClickProps, ThemeProps } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC } from "react";
import { Pressable, View as DefaultView } from "react-native";

export type ViewProps = ClickProps & ThemeProps & DefaultView["props"];
export const View: FC<ViewProps> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor("background");

  return (
    <>
      <Pressable
        onPress={props.onPress}
        style={{ backgroundColor: "transparent" }}
      >
        <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
      </Pressable>
    </>
  );
};

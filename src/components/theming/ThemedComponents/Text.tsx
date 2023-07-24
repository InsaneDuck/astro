import { ClickProps, ThemeProps } from "@/components/theming/Themed";
import React, { FC } from "react";
import { Pressable, Text as DefaultText } from "react-native";
import { useThemeColor } from "../UseThemeColor";

export type TextProps = ClickProps & ThemeProps & DefaultText["props"];

const Text: FC<TextProps> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "text",
  );

  return (
    <>
      <Pressable onPress={props.onPress}>
        <DefaultText style={[{ color }, style]} {...otherProps} />
      </Pressable>
    </>
  );
};

export default React.memo(Text);

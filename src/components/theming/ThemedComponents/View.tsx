import { ClickProps, ThemeProps } from "@/components/theming/Themed";
import React, { FC } from "react";
import { Pressable, View as DefaultView } from "react-native";
import { useThemeColor } from "../UseThemeColor";

export type ViewProps = ClickProps & ThemeProps & DefaultView["props"];
const View: FC<ViewProps> = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "background",
  );

  return (
    <>
      <Pressable onPress={props.onPress}></Pressable>
      <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
    </>
  );
};

export default React.memo(View);

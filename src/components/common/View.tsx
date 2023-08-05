import React, { FC } from "react";
import { View as DefaultView } from "react-native";

import { useThemeColor } from "@/components/theming/useThemeColor";

export type ViewProps = DefaultView["props"];
export const View: FC<ViewProps> = (props) => {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor("background");

  return (
    <>
      <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
    </>
  );
};

import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

import { useThemeColor } from "@/components/theming/useThemeColor";

type LoadingProps = object & ActivityIndicator["props"];

export const Loading: FC<LoadingProps> = (props) => {
  const color = useThemeColor("tabIconDefault");
  return <ActivityIndicator size="large" color={color} {...props} />;
};

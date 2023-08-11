import React from "react";

import { View } from "@/common/View";
import { useThemeColor } from "@/theming/useThemeColor";

export const InvertedSeparator = () => {
  const view = useThemeColor("background");

  return <View style={{ height: 1, backgroundColor: view }} />;
};

import React, { FC, memo } from "react";
import { StyleSheet } from "react-native";

import { View } from "@/common/View";
import { useThemeColor } from "@/theming/useThemeColor";

type SeparatorProps = object;
const propsAreEqual = () => {
  return true;
};

export const Separator: FC<SeparatorProps> = memo(() => {
  const borderColor = useThemeColor("borderColor");
  return <View style={[{ backgroundColor: "#2c2c2c" }, styles.separator]} />;
}, propsAreEqual);

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});

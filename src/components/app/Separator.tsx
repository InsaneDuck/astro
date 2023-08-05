import React, { FC, memo } from "react";
import { StyleSheet } from "react-native";

import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";

type SeparatorProps = object;
const propsAreEqual = () => {
  return true;
};
const count = 0;
export const Separator: FC<SeparatorProps> = memo(() => {
  const borderColor = useThemeColor("borderColor");
  //console.log("Rendering separator, count = ", ++count);
  return <View style={[{ backgroundColor: borderColor }, styles.separator]} />;
}, propsAreEqual);

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});

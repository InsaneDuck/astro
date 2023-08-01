import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC, memo } from "react";
import { StyleSheet } from "react-native";

type FeedSeparatorProps = {};
const propsAreEqual = () => {
  return true;
};
let count = 0;
export const FeedSeparator: FC<FeedSeparatorProps> = memo(() => {
  const borderColor = useThemeColor("borderColor");
  //console.log("Rendering separator, count = ", ++count);
  return <View style={[{ backgroundColor: borderColor }, styles.separator]} />;
}, propsAreEqual);

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});

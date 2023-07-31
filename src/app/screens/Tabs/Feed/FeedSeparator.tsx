import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC, memo } from "react";

type FeedSeparatorProps = {};
const propsAreEqual = () => {
  return true;
};
let count = 0;
export const FeedSeparator: FC<FeedSeparatorProps> = memo(() => {
  const borderColor = useThemeColor("borderColor");
  //console.log("Rendering separator, count = ", ++count);
  return (
    <View
      style={{
        height: 1,
        backgroundColor: borderColor,
      }}
    />
  );
}, propsAreEqual);

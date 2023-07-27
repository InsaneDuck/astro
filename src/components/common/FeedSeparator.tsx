import View from "@/components/theming/ThemedComponents/View";
import { useThemeColor } from "@/components/theming/UseThemeColor";
import Colors from "@/constants/Colors";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type FeedSeparatorProps = {};
let count = 0;
const FeedSeparator: FC<FeedSeparatorProps> = () => {
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
};
const arePropsEqual = () => {
  return true;
};
export default React.memo(FeedSeparator, arePropsEqual);

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.borderColor,
  },
});

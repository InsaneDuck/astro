import View from "@/components/theming/ThemedComponents/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type FeedSeparatorProps = {};

const FeedSeparator: FC<FeedSeparatorProps> = (props) => {
  return <View style={styles.separator}></View>;
};

export default FeedSeparator;

const styles = StyleSheet.create({
  separator: {
    marginBottom: 8,
  },
});

import { View } from "@/components/themed-components/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SeparatorProps = {};

export const Separator: FC<SeparatorProps> = () => {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

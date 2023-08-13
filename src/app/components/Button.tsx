import React, { FC } from "react";
import { ColorValue, StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "@/common/Text";
import { Press } from "@/theming/Themed";

type ButtonProps = {
  text: string;
  color: ColorValue;
  onPress?: Press;
};
export const Button: FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: props.color }, styles.userActionsButton]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userActionsButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

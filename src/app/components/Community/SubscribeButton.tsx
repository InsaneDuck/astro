import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "@/common/Text";
import { ConstantColors } from "@/theming/Colors";

type SubscribeButtonProps = object;
export const SubscribeButton: FC<SubscribeButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[
        { backgroundColor: ConstantColors.iosBlue },
        styles.userActionsButton,
      ]}
    >
      <Text style={{ color: "#ffffff", fontWeight: "bold" }}>SUBSCRIBE</Text>
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
});

import { Icon } from "@/components/common/Icon";
import { View } from "@/components/themed-components/View";
import { Press } from "@/theming/Themed";

import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SwipeButtonProps = {
  onPress: Press;
  color: string;
  fontAwesomeIcon: "arrow-up" | "arrow-down" | "reply" | "bookmark";
};

export const SwipeButton: FC<SwipeButtonProps> = (props) => {
  return (
    <View style={[styles.actionStyle, { backgroundColor: props.color }]}>
      <Icon icon={props.fontAwesomeIcon} color={"#fff"} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionStyle: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

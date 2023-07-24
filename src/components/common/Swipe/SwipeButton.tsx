import Icon from '@/components/common/Icon';
import { Press } from "@/components/theming/Themed";
import View from "@/components/theming/ThemedComponents/View";

import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SwipeButtonProps = {
  onPress: Press;
  color: string;
  fontAwesomeIcon: "arrow-up" | "arrow-down" | "reply" | "bookmark";
};

const SwipeButton: FC<SwipeButtonProps> = (props) => {
  return (
    <View
      onPress={props.onPress}
      style={[styles.actionStyle, { backgroundColor: props.color }]}
    >
      <Icon name={props.fontAwesomeIcon} color={"#fff"} />
    </View>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  actionStyle: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

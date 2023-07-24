import SwipeButton from "@/components/common/Swipe/SwipeButton";
import { Press } from "@/components/theming/Themed";
import View from "@/components/theming/ThemedComponents/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type demo = {
  press: Press;
  color: string;
  icon: "arrow-up" | "arrow-down" | "reply" | "bookmark";
};

type SwipeSideProps = {
  button1: demo;
  button2: demo;
};

const SwipeSide: FC<SwipeSideProps> = (props) => {
  return (
    <View style={styles.swipe}>
      <SwipeButton
        onPress={props.button1.press}
        color={props.button1.color}
        fontAwesomeIcon={props.button1.icon}
      />
      <SwipeButton
        onPress={props.button2.press}
        color={props.button2.color}
        fontAwesomeIcon={props.button2.icon}
      />
    </View>
  );
};

export default SwipeSide;
const styles = StyleSheet.create({
  swipe: {
    alignItems: "center",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

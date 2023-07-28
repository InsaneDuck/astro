import { SwipeButton } from "@/components/common/Swipe/SwipeButton";
import { View } from "@/components/themed-components/View";
import { Press } from "@/theming/Themed";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type demo = {
  key: string;
  press: Press;
  color: string;
  icon: "arrow-up" | "arrow-down" | "reply" | "bookmark";
};

type SwipeSideProps = {
  buttons?: demo[];
};

export const SwipeSide: FC<SwipeSideProps> = (props) => {
  const alt = props.buttons && (
    <View style={styles.swipe}>
      <SwipeButton
        key={props.buttons[0].key}
        onPress={props.buttons[0].press}
        color={props.buttons[0].color}
        fontAwesomeIcon={props.buttons[0].icon}
      />
      <SwipeButton
        key={props.buttons[1].key}
        onPress={props.buttons[1].press}
        color={props.buttons[1].color}
        fontAwesomeIcon={props.buttons[1].icon}
      />
    </View>
  );

  // if (alt) {
  //   return alt;
  // }

  return (
    <View style={styles.swipe}>
      {props.buttons?.map((button) => (
        <SwipeButton
          key={button.key}
          onPress={button.press}
          color={button.color}
          fontAwesomeIcon={button.icon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  swipe: {
    alignItems: "center",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

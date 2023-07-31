import { SwipeButton } from "@/components/common/Swipe/SwipeButton";
import { View } from "@/components/themed-components/View";
import Colors from "@/constants/Colors";
import { Press } from "@/theming/Themed";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

type SwipeProps = {
  upVote?: Press;
  downVote?: Press;
  reply?: Press;
  save?: Press;
} & Swipeable["props"];

export const Swipe: FC<SwipeProps> = (props) => {
  const { save, upVote, downVote, reply, ...otherProps } = props;

  const right = () => {
    return (
      <View style={styles.swipe}>
        <SwipeButton
          key={"reply"}
          onPress={reply}
          color={Colors.reply}
          fontAwesomeIcon={"reply"}
        />
        <SwipeButton
          key={"bookmark"}
          onPress={save}
          color={Colors.save}
          fontAwesomeIcon={"bookmark"}
        />
      </View>
    );
  };
  const left = () => {
    return (
      <View style={styles.swipe}>
        <SwipeButton
          key={"arrow-up"}
          onPress={upVote}
          color={Colors.upVote}
          fontAwesomeIcon={"arrow-up"}
        />
        <SwipeButton
          key={"arrow-down"}
          onPress={downVote}
          color={Colors.downVote}
          fontAwesomeIcon={"arrow-down"}
        />
      </View>
    );
  };

  //todo try useNativeAnimations
  return (
    <GestureHandlerRootView>
      <Swipeable
        useNativeAnimations={true}
        overshootRight={false}
        overshootLeft={false}
        renderLeftActions={left}
        renderRightActions={right}
        {...otherProps}
      />
    </GestureHandlerRootView>
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

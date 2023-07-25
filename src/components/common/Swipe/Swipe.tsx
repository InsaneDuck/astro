import SwipeSide from "@/components/common/Swipe/SwipeSide";
import { Press } from "@/components/theming/Themed";
import Colors from "@/constants/Colors";
import React, { FC } from "react";
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

const Swipe: FC<SwipeProps> = (props) => {
  const { save, upVote, downVote, reply, ...otherProps } = props;
  const rightSideButtons = React.useMemo(
    () => (
      <SwipeSide
        buttons={[
          {
            key: "reply",
            press: reply,
            color: Colors.reply,
            icon: "reply",
          },
          {
            key: "bookmark",
            press: save,
            color: Colors.save,
            icon: "bookmark",
          },
        ]}
      />
    ),
    [],
  );
  const leftSideButtons = React.useMemo(
    () => (
      <SwipeSide
        buttons={[
          {
            key: "arrow-up",
            press: upVote,
            color: Colors.upVote,
            icon: "arrow-up",
          },
          {
            key: "arrow-down",
            press: downVote,
            color: Colors.downVote,
            icon: "arrow-down",
          },
        ]}
      />
    ),
    [],
  );
  //todo try useNativeAnimations
  return (
    <GestureHandlerRootView>
      <Swipeable
        useNativeAnimations={true}
        overshootRight={false}
        overshootLeft={false}
        renderLeftActions={() => leftSideButtons}
        renderRightActions={() => rightSideButtons}
        {...otherProps}
      />
    </GestureHandlerRootView>
  );
};

//todo remove this
const areEqual = (prevProps: SwipeProps, nextProps: SwipeProps) => {
  return true;
};
export default React.memo(Swipe, areEqual);

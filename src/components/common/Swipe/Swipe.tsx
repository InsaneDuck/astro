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
  //todo try useNativeAnimations
  return (
    <GestureHandlerRootView>
      <Swipeable
        overshootRight={false}
        overshootLeft={false}
        renderLeftActions={() => (
          <SwipeSide
            button1={{ press: upVote, color: Colors.upVote, icon: "arrow-up" }}
            button2={{
              press: downVote,
              color: Colors.downVote,
              icon: "arrow-down",
            }}
          />
        )}
        renderRightActions={() => (
          <SwipeSide
            button1={{ press: reply, color: Colors.reply, icon: "reply" }}
            button2={{
              press: save,
              color: Colors.save,
              icon: "bookmark",
            }}
          />
        )}
        {...otherProps}
      />
    </GestureHandlerRootView>
  );
};

export default React.memo(Swipe);

import React from "react";
import { ActionSheetIOS, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Text } from "@/common/Text";
import { AppDispatch, RootState } from "@/store/store";
import { feedActions } from "@/store/to-be-removed/feed-slice";
import { ConstantColors } from "@/theming/Colors";

export const FeedSelector = () => {
  const theme = useColorScheme() || "dark";
  const dispatch = useDispatch<AppDispatch>();
  const type = useSelector((state: RootState) => state.feed.type);

  const onPress = (): any => {
    const allOptions = ["Cancel", "All", "Local", "Subscribed"];
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Select feed type",
        options: allOptions,
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            dispatch(feedActions.setType("All"));
            break;
          case 2:
            dispatch(feedActions.setType("Local"));
            break;
          case 3:
            dispatch(feedActions.setType("Subscribed"));
            break;
        }
      },
    );
  };
  return (
    <Text
      style={{ fontSize: 18, color: ConstantColors.iosBlue }}
      onPress={onPress}
    >
      {type}
    </Text>
  );
};

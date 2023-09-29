import React, { FC } from "react";
import { ActionSheetIOS, TouchableOpacity, useColorScheme } from "react-native";

import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";

type CommentsSorterProps = object;

export const CommentsSorter: FC<CommentsSorterProps> = (props) => {
  const theme = useColorScheme() || "dark";

  //todo this
  const all = () => {
    const allOptions = ["Cancel", "Hot", "Top", "New", "Old"];
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Sort comments by",
        options: allOptions,
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            //dispatch(postActions.setCommentSort("Hot"));
            break;
          case 2:
            //dispatch(postActions.setCommentSort("Top"));
            break;
          case 3:
            //dispatch(postActions.setCommentSort("New"));
            break;
          case 4:
            //dispatch(postActions.setCommentSort("Old"));
            break;
        }
      },
    );
  };
  const onPress = (): any => {
    all();
  };
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        overflow: "hidden",
        height: "auto",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18 }}>sort</Text>
      <Icon icon="sort" color="#ccc" size={20} />
    </TouchableOpacity>
  );
};

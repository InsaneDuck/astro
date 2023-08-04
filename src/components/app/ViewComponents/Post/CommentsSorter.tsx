import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { postActions } from "@/store/post-slice";
import { AppDispatch, RootState } from "@/store/store";
import React, { FC } from "react";
import { ActionSheetIOS, TouchableOpacity, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type CommentsSorterProps = {};

export const CommentsSorter: FC<CommentsSorterProps> = (props) => {
  const sort = useSelector((state: RootState) => state.post.sort);
  const theme = useColorScheme() || "dark";
  const dispatch = useDispatch<AppDispatch>();
  const onPress = (): any => {
    all();
  };
  const all = () => {
    const allOptions = ["Cancel", "Hot", "Top", "New", "Old"];
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Sort by",
        options: allOptions,
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            dispatch(postActions.setCommentSort("Hot"));
            break;
          case 2:
            dispatch(postActions.setCommentSort("Top"));
            break;
          case 3:
            dispatch(postActions.setCommentSort("New"));
            break;
          case 4:
            dispatch(postActions.setCommentSort("Old"));
            break;
        }
      },
    );
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
      <Text style={{ fontSize: 18 }}>{sort}</Text>
      <Icon icon={"sort"} color={"#ccc"} size={20} />
    </TouchableOpacity>
  );
};

import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

type CommentsSorterProps = {};

export const CommentsSorter: FC<CommentsSorterProps> = (props) => {
  const sort = useSelector((state: RootState) => state.feed.sort);
  const onPress = (): any => {};
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

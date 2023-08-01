import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import { PostAggregates } from "lemmy-js-client";
import React, { FC } from "react";

type PostActionsProps = {
  postAggregates: PostAggregates;
};

export const PostActions: FC<PostActionsProps> = (props) => {
  const { postAggregates } = props;
  const borderColor = useThemeColor("borderColor");
  const textColor = useThemeColor("text");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: borderColor,
        height: 42,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: borderColor,
        }}
      >
        <Icon
          icon={"arrow-up"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
        <Text style={{ fontSize: 23 }}>
          {postAggregates.upvotes < 1000
            ? postAggregates.upvotes
            : (postAggregates.upvotes / 1000).toFixed(1) + "K"}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: borderColor,
        }}
      >
        <Icon
          icon={"arrow-down"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
        <Text style={{ fontSize: 23 }}>{postAggregates.downvotes}</Text>
      </View>
      <Icon
        icon={"bookmark"}
        color={textColor}
        size={20}
        style={{ marginBottom: 1.5 }}
      />
      <Icon
        icon={"reply"}
        color={textColor}
        size={20}
        style={{ marginBottom: 1.5 }}
      />
      <Icon
        icon={"ellipsis"}
        color={textColor}
        size={20}
        style={{ marginBottom: 1.5 }}
      />
    </View>
  );
};

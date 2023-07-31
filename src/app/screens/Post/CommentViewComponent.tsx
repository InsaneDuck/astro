import { SwipeableCard } from "@/components/common/Cards/SwipeableCard";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import { CommentView } from "lemmy-js-client";
import React, { FC } from "react";

type CommentViewComponentProps = {
  comment: CommentView;
};

export const CommentViewComponent: FC<CommentViewComponentProps> = (props) => {
  const { comment } = props;
  const textColor = useThemeColor("text");
  const borderColor = useThemeColor("borderColor");

  const CommentHeaderLeft = () => {
    return <Text style={{ fontSize: 18 }}>{comment?.creator.name}</Text>;
  };

  const CommentHeaderRight = () => {
    return (
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
          size={18}
          style={{ marginBottom: 1.5 }}
        />
        <Text style={{ fontSize: 18 }}>{comment.counts.upvotes}</Text>
        <Icon
          icon={"arrow-down"}
          color={textColor}
          size={18}
          style={{ marginBottom: 1.5 }}
        />
        <Text style={{ fontSize: 18 }}>{comment.counts.downvotes}</Text>
      </View>
    );
  };

  const CommentHeader = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#e10303",
        }}
      >
        <CommentHeaderLeft />
        <CommentHeaderRight />
      </View>
    );
  };
  const CommentContent = () => {
    return (
      <Text style={{ fontSize: 15, backgroundColor: "#ccc", marginTop: 5 }}>
        {comment?.comment.content}
      </Text>
    );
  };
  return (
    <>
      <SwipeableCard style={{ padding: 10, backgroundColor: "#7fef05" }}>
        <CommentHeader />
        <CommentContent />
      </SwipeableCard>
    </>
  );
};

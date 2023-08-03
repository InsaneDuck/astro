import { UserButton } from "@/components/app/Buttons/UserButton";
import { Card } from "@/components/common/Cards/Card";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { CommentView } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type CommentViewComponentProps = {
  comment: CommentView;
};

export const CommentViewComponent: FC<CommentViewComponentProps> = (props) => {
  const { comment } = props;
  const textColor = useThemeColor("text");
  const borderColor = useThemeColor("borderColor");

  const CommentHeaderLeft = () => {
    return <UserButton creator={comment.creator} />;
  };

  const CommentHeaderRight = () => {
    return (
      <View
        style={[{ backgroundColor: borderColor }, styles.commentHeaderRight]}
      >
        <Icon icon={"arrow-up"} color={textColor} size={16} />
        <Text style={styles.headerText}>{comment.counts.upvotes}</Text>
        <Icon icon={"arrow-down"} color={textColor} size={16} />
        <Text style={styles.headerText}>{comment.counts.downvotes}</Text>
      </View>
    );
  };

  const CommentHeader = () => {
    return (
      <View style={styles.commentHeader}>
        <CommentHeaderLeft />
        <CommentHeaderRight />
      </View>
    );
  };
  const CommentContent = () => {
    return (
      <Text style={styles.commentContent}>{comment?.comment.content}</Text>
    );
  };
  return (
    <>
      <Card style={styles.comment}>
        <CommentHeader />
        <CommentContent />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  comment: { padding: 10 },
  commentHeaderRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    borderRadius: 5,
  },
  headerText: { fontSize: 18 },
  commentHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  commentContent: { fontSize: 15, marginTop: 5 },
});

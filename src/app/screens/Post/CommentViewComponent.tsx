import { CommentView } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { UserButton } from "@/app/components/Buttons/UserButton";
import { Card } from "@/common/Cards/Card";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { formatTimeToDuration } from "@/helper-functions/formatTimeToDuration";
import { useThemeColor } from "@/theming/useThemeColor";

type CommentViewComponentProps = {
  comment: CommentView;
};

export const CommentViewComponent: FC<CommentViewComponentProps> = (props) => {
  const { comment } = props;
  const tabIconDefault = useThemeColor("tabIconDefault");
  const CommentHeaderLeft = () => {
    return <UserButton creator={comment.creator} />;
  };

  const CommentHeaderRight = () => {
    return (
      <View style={[styles.commentHeaderRight]}>
        <Icon
          icon="arrow-up"
          color={tabIconDefault}
          size={16}
          style={{ marginRight: 1, marginLeft: 1 }}
        />
        <Text style={styles.headerText}>{comment.counts.score}</Text>
        <Icon
          icon="clock"
          color={tabIconDefault}
          size={16}
          style={{ marginRight: 3, marginLeft: 3 }}
        />
        <Text style={styles.headerText}>
          {formatTimeToDuration(comment.comment.published)}
        </Text>
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

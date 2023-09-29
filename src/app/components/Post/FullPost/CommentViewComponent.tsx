import { CommentView } from "lemmy-js-client";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { PersonButton } from "@/app/components/Person/PersonButton";
import { Card } from "@/common/Cards/Card";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { formatTimeToDuration } from "@/helper-functions/formatTimeToDuration";
import { useThemeColor } from "@/theming/useThemeColor";

type CommentViewComponentProps = {
  commentView: CommentView;
  index: number;
};

export const CommentViewComponent: FC<CommentViewComponentProps> = (props) => {
  const { commentView } = props;
  const tabIconDefault = useThemeColor("tabIconDefault");
  const [expanded, setExpanded] = useState(true);
  const CommentHeaderLeft = () => {
    return <PersonButton person={commentView.creator} />;
  };

  const toggleExpander = () => {
    setExpanded((prevState) => !prevState);
  };

  const CommentHeaderRight = () => {
    return (
      <View style={[styles.commentHeaderRight]}>
        <Icon
          icon="arrow-up"
          color={tabIconDefault}
          size={12}
          style={{ marginRight: 1, marginLeft: 1 }}
        />
        <Text>{commentView.counts.score}</Text>
        <Icon
          icon="clock"
          color={tabIconDefault}
          size={12}
          style={{ marginRight: 3, marginLeft: 3 }}
        />
        <Text>{formatTimeToDuration(commentView.comment.published)}</Text>
      </View>
    );
  };

  const CommentHeader = () => {
    return (
      <TouchableOpacity onPress={toggleExpander} style={styles.commentHeader}>
        <CommentHeaderLeft />
        <CommentHeaderRight />
      </TouchableOpacity>
    );
  };
  const CommentContent = () => {
    return (
      <Text onPress={toggleExpander} style={styles.commentContent}>
        {commentView?.comment.content}
      </Text>
    );
  };
  return (
    <>
      <Card style={styles.comment}>
        <View
          style={{
            backgroundColor: "#f63900",
            width: 3,
            height: "100%",
          }}
        />
        <View style={{ padding: 8, flex: 1 }}>
          <CommentHeader />
          {expanded && <CommentContent />}
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  comment: { flexDirection: "row" },
  commentHeaderRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    borderRadius: 5,
  },

  commentHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  commentContent: { marginTop: 5 },
});

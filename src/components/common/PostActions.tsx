import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import { PostAggregates } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

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
        width: "100%",
        height: 42,
      }}
    >
      <View
        style={[
          {
            backgroundColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon
          icon={"arrow-up"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
        <Text style={{ fontSize: 18 }}>
          {postAggregates.upvotes < 1000
            ? postAggregates.upvotes
            : (postAggregates.upvotes / 1000).toFixed(1) + "K"}
        </Text>
      </View>
      <View style={[styles.perView]}>
        <Icon
          icon={"arrow-down"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
        <Text style={{ fontSize: 18 }}>{postAggregates.downvotes}</Text>
      </View>
      <View
        style={[
          {
            backgroundColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon
          icon={"bookmark"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
      </View>
      <View style={[styles.perView]}>
        <Icon
          icon={"reply"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
      </View>
      <View
        style={[
          {
            backgroundColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon
          icon={"ellipsis"}
          color={textColor}
          size={20}
          style={{ marginBottom: 1.5 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  perView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },
});

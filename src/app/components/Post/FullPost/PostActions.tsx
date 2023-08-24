import { PostAggregates } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Vibration } from "react-native";

import { Icon } from "@/common/Icon";
import { Separator } from "@/common/Separator";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { aggregateHelper } from "@/helper-functions/aggregateHelper";
import { useThemeColor } from "@/theming/useThemeColor";

type PostActionsProps = {
  postAggregates: PostAggregates;
};

export const PostActions: FC<PostActionsProps> = (props) => {
  const { postAggregates } = props;
  const borderColor = useThemeColor("borderColor");
  const textColor = useThemeColor("text");
  const iconSize = 15;

  const UpVote = () => {
    return (
      <TouchableOpacity
        onPress={() => Vibration.vibrate()}
        style={[
          {
            borderRightColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon icon="arrow-up" color={textColor} size={iconSize} />
        <Text style={styles.text}>
          {aggregateHelper(postAggregates.upvotes)}
        </Text>
      </TouchableOpacity>
    );
  };

  const DownVote = () => {
    return (
      <TouchableOpacity
        style={[
          {
            borderRightColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon icon="arrow-down" color={textColor} size={iconSize} />
        <Text style={styles.text}>
          {aggregateHelper(postAggregates.downvotes)}
        </Text>
      </TouchableOpacity>
    );
  };

  const Save = () => {
    return (
      <TouchableOpacity
        style={[
          {
            borderRightColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon icon="bookmark" color={textColor} size={iconSize} />
      </TouchableOpacity>
    );
  };

  const Reply = () => {
    return (
      <TouchableOpacity
        style={[
          {
            borderRightColor: borderColor,
          },
          styles.perView,
        ]}
      >
        <Icon icon="reply" color={textColor} size={iconSize} />
      </TouchableOpacity>
    );
  };

  const MoreOptions = () => {
    return (
      <TouchableOpacity style={[styles.perView]}>
        <Icon icon="ellipsis" color={textColor} size={iconSize} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Separator />
      <View style={styles.container}>
        <UpVote />
        <DownVote />
        <Save />
        <Reply />
        <MoreOptions />
      </View>
      <Separator />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  perView: {
    borderRightWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    fontSize: 18,
  },
});

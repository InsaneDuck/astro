import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";

import { ImageEditButton } from "@/app/components/ImageEditButton";
import { Icon } from "@/common/Icon";
import { View } from "@/common/View";

type AvatarProps = {
  borderColor: any;
  avatar?: string;
  color: any;
};
export const Avatar: FC<AvatarProps> = (props) => (
  <View style={[styles.avatar, { borderColor: props.borderColor }]}>
    {props.avatar ? (
      <Image
        source={{ uri: props.avatar }}
        style={{ width: "100%", height: "100%" }}
      />
    ) : (
      <Icon icon="user" color={props.color} size={75} />
    )}
    <ImageEditButton type="user-avatar" />
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 13,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

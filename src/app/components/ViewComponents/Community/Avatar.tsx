import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ImageEditButton } from "@/app/components/ViewComponents/Community/ImageEditButton";
import { CustomImage } from "@/common/CustomImage";
import { Icon } from "@/common/Icon";
import { View } from "@/common/View";
import { Press } from "@/theming/Themed";

type AvatarProps = {
  borderColor: any;
  avatar?: string;
  onPress?: Press;
  color: any;
};

export const Avatar: FC<AvatarProps> = (props) => (
  <View style={[styles.avatar, { borderColor: props.borderColor }]}>
    {props.avatar ? (
      <CustomImage
        source={{ uri: props.avatar }}
        style={{ width: 150, height: 150 }}
        resizeMode="cover"
      />
    ) : (
      <Icon icon="user" color={props.color} size={75} />
    )}
    <ImageEditButton onPress={props.onPress} />
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

import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { useThemeColor } from "@/theming/useThemeColor";
import { Community } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, TouchableOpacity } from "react-native";

type CommunityButtonProps = {
  community: Community;
};

export const CommunityButton: FC<CommunityButtonProps> = (props) => {
  const { community } = props;
  const borderColor = useThemeColor("borderColor");
  const textColor = useThemeColor("text");
  const tabIconDefault = useThemeColor("tabIconDefault");

  return (
    <TouchableOpacity
      style={{
        backgroundColor: borderColor,
        borderRadius: 5,
        padding: 3,
        paddingLeft: 6,
        paddingRight: 6,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {community.icon ? (
        <Image
          source={{ uri: community.icon }}
          style={{ borderRadius: 5, width: 20, height: 20 }}
        />
      ) : (
        <Icon
          icon={"user"}
          color={tabIconDefault}
          size={18}
          style={{ marginBottom: 1.5 }}
        />
      )}
      <Text
        style={{
          fontSize: 18,
          marginLeft: 5,
        }}
      >
        {community.name}
      </Text>
    </TouchableOpacity>
  );
};

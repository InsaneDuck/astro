import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { useThemeColor } from "@/theming/useThemeColor";
import { Person } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, TouchableOpacity } from "react-native";

type UserButtonProps = {
  creator: Person;
};

export const UserButton: FC<UserButtonProps> = (props) => {
  const { creator } = props;
  const textColor = useThemeColor("text");
  const borderColor = useThemeColor("borderColor");
  return (
    <TouchableOpacity
      style={{
        backgroundColor: borderColor,
        borderRadius: 5,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {creator.avatar ? (
        <Image
          source={{ uri: creator.avatar }}
          width={20}
          height={20}
          style={{ borderRadius: 5 }}
        />
      ) : (
        <Icon
          icon={"user"}
          color={textColor}
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
        {creator.name}
      </Text>
    </TouchableOpacity>
  );
};

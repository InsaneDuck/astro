import React from "react";

import { ListItem } from "@/app/components/List/ListItem";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

export const Select = ({
  name,
  onPress,
}: {
  name: string;
  onPress?: Press;
}) => {
  const textColor = useThemeColor("text");

  return (
    <ListItem onPress={onPress}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ fontSize: 18, paddingBottom: 2 }}>Option</Text>
        <Icon icon="chevron-right" color={textColor} size={15} />
      </View>
    </ListItem>
  );
};

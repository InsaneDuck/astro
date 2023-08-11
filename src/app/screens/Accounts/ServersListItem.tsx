import { Instance } from "lemmy-js-client";
import { FC } from "react";
import { StyleProp, TextStyle, TouchableOpacity } from "react-native";

import { Text } from "@/common/Text";
import { useThemeColor } from "@/theming/useThemeColor";

type ServersListItemProps = {
  item: Instance;
  style?: StyleProp<TextStyle>;
};

export const ServersListItem: FC<ServersListItemProps> = (props) => {
  const borderColor = useThemeColor("borderColor");
  return (
    <TouchableOpacity
      style={[props.style, { backgroundColor: borderColor, padding: 15 }]}
      key={props.item.id}
    >
      <Text>{props.item.domain}</Text>
    </TouchableOpacity>
  );
};

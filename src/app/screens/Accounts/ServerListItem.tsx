import { Instance } from "lemmy-js-client";
import { FC } from "react";

import { Text } from "@/common/Text";
import { useThemeColor } from "@/theming/useThemeColor";

type ServerListItemProps = {
  item: Instance;
};

export const ServerListItem: FC<ServerListItemProps> = (props) => {
  const borderColor = useThemeColor("borderColor");
  return (
    <Text
      style={{ backgroundColor: borderColor, padding: 15 }}
      key={props.item.id}
    >
      {props.item.domain}
    </Text>
  );
};

import { Instance } from "lemmy-js-client";
import { FC } from "react";
import { StyleProp, TextStyle } from "react-native";

import { ListItem } from "@/app/components/List/ListItem";
import { Text } from "@/common/Text";

type ServersListItemProps = {
  item: Instance;
  style?: StyleProp<TextStyle>;
};

export const ServersListItem: FC<ServersListItemProps> = (props) => {
  return (
    <ListItem style={props.style} key={props.item.id}>
      <Text>{props.item.domain}</Text>
    </ListItem>
  );
};

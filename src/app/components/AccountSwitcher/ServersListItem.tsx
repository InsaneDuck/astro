import { Instance } from "lemmy-js-client";
import { FC } from "react";
import { StyleProp, TextStyle } from "react-native";

import { FormItem } from "@/app/components/Form/FormItem";
import { Text } from "@/common/Text";

type ServersListItemProps = {
  item: Instance;
  style?: StyleProp<TextStyle>;
};

export const ServersListItem: FC<ServersListItemProps> = (props) => {
  return (
    <FormItem style={props.style} key={props.item.id}>
      <Text>{props.item.domain}</Text>
    </FormItem>
  );
};

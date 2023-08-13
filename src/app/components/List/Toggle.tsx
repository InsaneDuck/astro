import React, { FC, useState } from "react";
import { Switch } from "react-native";

import { ListItem } from "@/app/components/List/ListItem";
import { Text } from "@/common/Text";

type ToggleProps = {
  name: string;
  value?: boolean;
};

export const Toggle: FC<ToggleProps> = (props) => {
  const { name, value } = props;
  const [isEnabled, setIsEnabled] = useState(value);

  const toggle = (): any => {
    setIsEnabled((prevState) => !prevState);
  };
  return (
    <ListItem onPress={toggle}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Switch onValueChange={toggle} value={isEnabled} />
    </ListItem>
  );
};

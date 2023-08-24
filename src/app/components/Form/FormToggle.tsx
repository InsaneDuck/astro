import React, { FC, useState } from "react";
import { Switch } from "react-native";

import { FormItem } from "@/app/components/Form/FormItem";
import { Text } from "@/common/Text";

type ToggleProps = {
  name: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

export const FormToggle: FC<ToggleProps> = (props) => {
  const { name, value } = props;
  const [isEnabled, setIsEnabled] = useState(value);

  const toggle = (): any => {
    setIsEnabled((prevState) => !prevState);
  };

  function onChange(): any {
    props.onChange && props.onChange(value);
  }

  return (
    <FormItem onPress={toggle}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Switch onValueChange={toggle} value={isEnabled} onChange={onChange} />
    </FormItem>
  );
};

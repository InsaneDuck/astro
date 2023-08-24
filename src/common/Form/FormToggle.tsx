import React, { FC, useState } from "react";
import { Switch } from "react-native";

import { FormItem } from "@/common/Form/FormItem";
import { Text } from "@/common/Text";

type ToggleProps = {
  name: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

export const FormToggle: FC<ToggleProps> = (props) => {
  const { name, value } = props;
  const [isEnabled, setIsEnabled] = useState(value);

  const onPressToggle = (): any => {
    setIsEnabled((prevState) => !prevState);
  };

  function onChange(): any {
    props.onChange && props.onChange(value);
  }

  return (
    <FormItem onPress={onPressToggle}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Switch
        onValueChange={onPressToggle}
        value={isEnabled}
        onChange={onChange}
      />
    </FormItem>
  );
};

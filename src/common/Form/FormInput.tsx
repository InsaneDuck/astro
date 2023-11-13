import React, { FC } from "react";
import { TextInput, TextInputProps } from "react-native";

import { FormItem } from "@/common/Form/FormItem";

type TextInputItemProps = {
  name: string;
} & TextInputProps;
export const FormInput: FC<TextInputItemProps> = (props, ref) => {
  const { ...inputProps } = props;

  return (
    <FormItem>
      <TextInput autoCapitalize="none" ref={ref} {...inputProps} />
    </FormItem>
  );
};

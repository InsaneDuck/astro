import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

import { FormItem } from "@/app/components/Form/FormItem";

type TextInputItemProps = {
  placeholder: string;
  onPress?: any;
} & TextInput["props"];
export const FormInput: FC<TextInputItemProps> = (props) => {
  const { onPress, placeholder, ...otherProps } = props;
  return (
    <FormItem onPress={onPress}>
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 18 }}
        {...otherProps}
      />
    </FormItem>
  );
};

const styles = StyleSheet.create({});

import { FC } from "react";
import { TextInput } from "react-native";

import { FormItem } from "@/common/Form/FormItem";

type TextInputItemProps = {
  placeholder: string;
} & TextInput["props"];
export const FormInput: FC<TextInputItemProps> = (props) => {
  const { placeholder, ...otherProps } = props;
  return (
    <FormItem>
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 18, width: "100%", height: "100%", color: "#ccc" }}
        {...otherProps}
      />
    </FormItem>
  );
};

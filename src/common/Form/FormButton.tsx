import React, { FC } from "react";
import { Button } from "react-native";

import { FormItem } from "@/common/Form/FormItem";

type ListButtonProps = object & Button["props"];
export const FormButton: FC<ListButtonProps> = (props) => {
  return (
    <FormItem style={{ justifyContent: "center" }}>
      <Button {...props} />
    </FormItem>
  );
};

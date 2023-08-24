import React, { FC } from "react";
import { Button, StyleSheet } from "react-native";

import { FormItem } from "@/app/components/Form/FormItem";

type ListButtonProps = {
  name: string;
};
export const FormButton: FC<ListButtonProps> = (props) => {
  return (
    <FormItem style={{ justifyContent: "center" }}>
      <Button title={props.name} />
    </FormItem>
  );
};

const styles = StyleSheet.create({});

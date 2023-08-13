import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

import { ListItem } from "@/app/components/List/ListItem";

type TextInputItemProps = {
  placeholder: string;
  onPress?: any;
} & TextInput["props"];
export const TextInputItem: FC<TextInputItemProps> = (props) => {
  const { onPress, placeholder, ...otherProps } = props;
  return (
    <ListItem onPress={onPress}>
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 18 }}
        {...otherProps}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({});

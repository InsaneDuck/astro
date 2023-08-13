import React, { FC } from "react";
import { Button, StyleSheet } from "react-native";

import { ListItem } from "@/app/components/List/ListItem";

type ListButtonProps = {
  name: string;
};
export const ListButton: FC<ListButtonProps> = (props) => {
  return (
    <ListItem style={{ justifyContent: "center" }}>
      <Button title={props.name} />
    </ListItem>
  );
};

const styles = StyleSheet.create({});

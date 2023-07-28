import { View, ViewProps } from "@/components/themed-components/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

export type CardProps = {} & ViewProps;

export const Card: FC<CardProps> = (props) => {
  const { style, ...otherProps } = props;
  return <View style={[styles.card, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
  card: {
    // borderRadius: 5,
    // margin: 5,
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: Colors.borderColor,
    elevation: 14,
  },
});

import View, { ViewProps } from "@/components/theming/ThemedComponents/View";
import Colors from "@/constants/Colors";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

export type CardProps = {} & ViewProps;

const Card: FC<CardProps> = (props) => {
  const { style, ...otherProps } = props;
  return <View style={styles.card} {...otherProps} />;
};

export default Card;
const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    padding: 0,
    paddingTop: 16,
    elevation: 4,
    borderStyle: "solid",
    borderWidth: 0.75,
    borderTopColor: Colors.cardBorder,
    borderBottomColor: Colors.cardBorder,
  },
});

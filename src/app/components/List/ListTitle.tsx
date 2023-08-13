import React from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";

export const ListTitle = ({ text }: { text: string }) => (
  <Text style={styles.title}>{text}</Text>
);

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 15,
    width: "84%",
    marginBottom: 3,
  },
});

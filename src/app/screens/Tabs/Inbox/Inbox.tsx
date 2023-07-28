import { View } from "@/components/themed-components/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type InboxProps = {};

export const Inbox: FC<InboxProps> = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

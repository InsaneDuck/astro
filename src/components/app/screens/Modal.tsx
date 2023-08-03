import { View } from "@/components/common/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type ModalProps = {};

export const Modal: FC<ModalProps> = () => {
  return <View style={styles.containerSections}></View>;
};

const styles = StyleSheet.create({
  containerSections: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

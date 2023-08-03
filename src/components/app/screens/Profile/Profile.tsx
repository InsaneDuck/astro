import { View } from "@/components/common/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type ProfileProps = {};

export const Profile: FC<ProfileProps> = () => {
  return <View style={styles.containerSections}></View>;
};

const styles = StyleSheet.create({
  containerSections: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

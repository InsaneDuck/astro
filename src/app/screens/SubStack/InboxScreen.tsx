import React from "react";
import { StyleSheet } from "react-native";

import { Loading } from "@/common/Loading";
import { View } from "@/common/View";

export const InboxScreen = () => {
  return (
    <View style={[styles.container]}>
      <Loading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

import React from "react";
import { StyleSheet } from "react-native";

import { Loading } from "@/components/common/Loading";
import { View } from "@/components/common/View";

export const Inbox = () => {
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

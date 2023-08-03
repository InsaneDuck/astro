import { Loading } from "@/components/common/Loading";
import { View } from "@/components/common/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type InboxProps = {};

export const Inbox: FC<InboxProps> = () => {
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

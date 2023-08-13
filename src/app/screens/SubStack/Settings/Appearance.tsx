import React from "react";
import { StyleSheet } from "react-native";

import { List } from "@/app/components/List/List";
import { Select } from "@/app/components/List/Select";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";

export const Appearance = () => {
  return (
    <View style={styles.container}>
      <List title="THEME">
        <Select name="Dark Mode" />
      </List>
      <List title="POST">
        <Toggle name="Post Size" />
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 15,
    width: "84%",
    marginBottom: 3,
  },
  innerContainer: {
    width: "90%",
    borderRadius: 13,

    overflow: "hidden",
  },
});

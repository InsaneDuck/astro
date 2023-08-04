import { OptionsItem } from "@/components/app/OptionsItem";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import React, { FC } from "react";
import { StyleSheet, Switch } from "react-native";

type AppearanceProps = {};

export const Appearance: FC<AppearanceProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THEME</Text>
      <View style={styles.innerContainer}>
        <OptionsItem title={"Dark Mode"} />
      </View>
      <Text style={styles.title}>POST</Text>
      <View style={styles.innerContainer}>
        <OptionsItem title={"Post Size"}>
          <Switch />
        </OptionsItem>
      </View>
      <Text style={styles.title}>COMMENTS</Text>
      <View style={styles.innerContainer}>
        <OptionsItem title={"Dark Mode"} />
      </View>
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
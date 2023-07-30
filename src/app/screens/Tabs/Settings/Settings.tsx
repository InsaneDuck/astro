import { SettingsItems } from "@/components/common/SettingsItems";
import { View } from "@/components/themed-components/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SettingsProps = {};

export const Settings: FC<SettingsProps> = () => {
  return (
    <View style={styles.container}>
      <SettingsItems />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

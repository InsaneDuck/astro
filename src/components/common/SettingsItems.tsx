import { SettingsItem } from "@/components/common/SettingsItem";
import { View } from "@/components/themed-components/View";
import React, { FC, ReactNode } from "react";
import { StyleSheet } from "react-native";

type SettingsItemProps = {
  components?: ReactNode[];
};

export const SettingsItems: FC<SettingsItemProps> = (props) => {
  return (
    <View style={styles.list}>
      <SettingsItem />
      <SettingsItem />
      <SettingsItem />
      <SettingsItem />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 20,
    borderRadius: 13,
  },
});

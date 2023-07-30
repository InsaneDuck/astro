import { SettingsItem } from "@/components/common/SettingsItem";
import { View } from "@/components/themed-components/View";
import { SettingsNavigation, SettingsRoutes } from "@/constants/Navigation";
import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SettingsProps = {};

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SettingsNavigation>();
  return (
    <View style={styles.container}>
      <SettingsItem icon={"info-circle"} title={"General"} />
      <SettingsItem
        icon={"palette"}
        title={"Appearance"}
        onPress={() => navigation.navigate(SettingsRoutes.Appearance)}
      />
      <SettingsItem icon={"filter"} title={"Filters"} />
      <SettingsItem icon={"file-export"} title={"Export/Import"} />
      <SettingsItem icon={"info-circle"} title={"About"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    margin: 20,
    overflow: "hidden",
  },
});

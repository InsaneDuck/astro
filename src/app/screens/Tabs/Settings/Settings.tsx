import { SettingsItem } from "@/app/screens/Tabs/Settings/SettingsItem";
import { View } from "@/components/themed-components/View";
import { SettingsNavigation, SettingsRoutes } from "@/constants/Navigation";
import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SettingsProps = {};

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SettingsNavigation>();
  return (
    <>
      <View style={styles.container}>
        <SettingsItem icon={"info-circle"} title={"General"} />
        <SettingsItem
          icon={"palette"}
          title={"Appearance"}
          onPress={() => navigation.navigate(SettingsRoutes.Appearance)}
        />
        <SettingsItem icon={"filter"} title={"Filters"} />
        <SettingsItem title={"Face ID & Passcode"} icon={"lock"} />
        <SettingsItem title={"Accounts"} icon={"user"} />
        <SettingsItem icon={"file-export"} title={"Export/Import"} />
      </View>

      <View style={styles.container}>
        <SettingsItem icon={"info-circle"} title={"About"} />
        <SettingsItem icon={"star"} title={"Rate"} />
        <SettingsItem icon={"dollar"} title={"Tip"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    margin: 20,
    overflow: "hidden",
  },
});

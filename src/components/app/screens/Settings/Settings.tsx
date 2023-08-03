import { OptionsItem } from "@/components/app/OptionsItem";
import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { SettingsStackNavigation } from "@/router/tabs/SettingsStackLayout";

import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SettingsProps = {};

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SettingsStackNavigation>();
  const tabIconDefault = useThemeColor("tabIconDefault");
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <OptionsItem title={"General"} />
        <OptionsItem
          title={"Appearance"}
          onPress={() => navigation.navigate("Appearance")}
        />
        <OptionsItem title={"Filters"} />
        <OptionsItem title={"Face ID & Passcode"} />
        <OptionsItem title={"Accounts"} />
        <OptionsItem title={"Export/Import"} />
      </View>

      <View style={styles.innerContainer}>
        <OptionsItem title={"About"} />
        <OptionsItem title={"Rate"} />
        <OptionsItem title={"Tip"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",

    flex: 1,
  },
  innerContainer: {
    width: "90%",
    borderRadius: 13,
    marginTop: 20,
    overflow: "hidden",
  },
});

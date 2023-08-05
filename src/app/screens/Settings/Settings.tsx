import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { OptionsItem } from "@/components/app/OptionsItem";
import { View } from "@/components/common/View";
import { SettingsStackNavigation } from "@/router/tabs/SettingsStackLayout";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SettingsStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <OptionsItem
          title="General"
          onPress={() => navigation.navigate("General")}
        />
        <OptionsItem
          title="Appearance"
          onPress={() => navigation.navigate("Appearance")}
        />
        <OptionsItem
          title="Filters"
          onPress={() => navigation.navigate("Filters")}
        />
        <OptionsItem
          title="Face ID & Passcode"
          onPress={() => navigation.navigate("FaceIdAndPasscode")}
        />
        <OptionsItem
          title="Accounts"
          onPress={() => navigation.navigate("Accounts")}
        />
        <OptionsItem
          title="Export/Import"
          onPress={() => navigation.navigate("ExportImport")}
        />
      </View>

      <View style={styles.innerContainer}>
        <OptionsItem
          title="About"
          onPress={() => navigation.navigate("About")}
        />
        <OptionsItem title="Rate" onPress={() => navigation.navigate("Rate")} />
        <OptionsItem title="Tip" onPress={() => navigation.navigate("Tip")} />
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

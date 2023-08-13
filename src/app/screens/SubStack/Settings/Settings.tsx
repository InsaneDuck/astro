import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { TextItem } from "@/app/components/List/TextItem";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SubStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextItem
          name="General"
          onPress={() => navigation.navigate("General")}
        />
        <TextItem
          name="Appearance"
          onPress={() => navigation.navigate("Appearance")}
        />
        <TextItem
          name="Filters"
          onPress={() => navigation.navigate("Filters")}
        />
        <TextItem
          name="Face ID & Passcode"
          onPress={() => navigation.navigate("FaceIdAndPasscode")}
        />
        <TextItem
          name="Accounts"
          onPress={() => navigation.navigate("Accounts")}
        />
        <TextItem
          name="Export/Import"
          onPress={() => navigation.navigate("ExportImport")}
        />
      </View>

      <View style={styles.innerContainer}>
        <TextItem name="About" onPress={() => navigation.navigate("About")} />
        <TextItem name="Rate" onPress={() => navigation.navigate("Rate")} />
        <TextItem name="Tip" onPress={() => navigation.navigate("Tip")} />
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

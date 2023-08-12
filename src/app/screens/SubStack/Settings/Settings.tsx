import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ListItem } from "@/app/components/ListItem";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SubStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ListItem
          title="General"
          onPress={() => navigation.navigate("General")}
        />
        <ListItem
          title="Appearance"
          onPress={() => navigation.navigate("Appearance")}
        />
        <ListItem
          title="Filters"
          onPress={() => navigation.navigate("Filters")}
        />
        <ListItem
          title="Face ID & Passcode"
          onPress={() => navigation.navigate("FaceIdAndPasscode")}
        />
        <ListItem
          title="Accounts"
          onPress={() => navigation.navigate("Accounts")}
        />
        <ListItem
          title="Export/Import"
          onPress={() => navigation.navigate("ExportImport")}
        />
      </View>

      <View style={styles.innerContainer}>
        <ListItem title="About" onPress={() => navigation.navigate("About")} />
        <ListItem title="Rate" onPress={() => navigation.navigate("Rate")} />
        <ListItem title="Tip" onPress={() => navigation.navigate("Tip")} />
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

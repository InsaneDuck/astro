import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ListText } from "@/app/components/List/ListText";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SubStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ListText
          name="General"
          onPress={() => navigation.navigate("General")}
        />
        <ListText
          name="Appearance"
          onPress={() => navigation.navigate("Appearance")}
        />
        <ListText
          name="Filters"
          onPress={() => navigation.navigate("Filters")}
        />
        <ListText
          name="Face ID & Passcode"
          onPress={() => navigation.navigate("FaceIdAndPasscode")}
        />
        <ListText
          name="Accounts"
          onPress={() => navigation.navigate("Accounts")}
        />
        <ListText
          name="Export/Import"
          onPress={() => navigation.navigate("ExportImport")}
        />
      </View>

      <View style={styles.innerContainer}>
        <ListText name="About" onPress={() => navigation.navigate("About")} />
        <ListText name="Rate" onPress={() => navigation.navigate("Rate")} />
        <ListText name="Tip" onPress={() => navigation.navigate("Tip")} />
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

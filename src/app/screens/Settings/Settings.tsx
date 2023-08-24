import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { FormText } from "@/app/components/Form/FormText";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SubStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FormText
          name="General"
          onPress={() => navigation.navigate("General")}
        />
        <FormText
          name="Appearance"
          onPress={() => navigation.navigate("Appearance")}
        />
        <FormText
          name="Filters"
          onPress={() => navigation.navigate("Filters")}
        />
        <FormText
          name="Face ID & Passcode"
          onPress={() => navigation.navigate("FaceIdAndPasscode")}
        />
        <FormText
          name="Accounts"
          onPress={() => navigation.navigate("Accounts")}
        />
        <FormText
          name="Export/Import"
          onPress={() => navigation.navigate("ExportImport")}
        />
      </View>

      <View style={styles.innerContainer}>
        <FormText name="About" onPress={() => navigation.navigate("About")} />
        <FormText name="Rate" onPress={() => navigation.navigate("Rate")} />
        <FormText name="Tip" onPress={() => navigation.navigate("Tip")} />
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

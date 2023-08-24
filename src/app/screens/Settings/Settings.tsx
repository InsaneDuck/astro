import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { Form } from "@/common/Form/Form";
import { FormText } from "@/common/Form/FormText";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SubStackNavigation>();

  const SettingsItems = {
    General: {
      name: "General",
      onPress: () => navigation.navigate("General"),
    },
    Appearance: {
      name: "Appearance",
      onPress: () => navigation.navigate("Appearance"),
    },
    Filters: {
      name: "Filters",
      onPress: () => navigation.navigate("Filters"),
    },
    FaceIdAndPasscode: {
      name: "FaceId & Passcode",
      onPress: () => navigation.navigate("FaceIdAndPasscode"),
    },
    Accounts: {
      name: "Accounts",
      onPress: () => navigation.navigate("Accounts"),
    },
    ExportImport: {
      name: "Export | Import",
      onPress: () => navigation.navigate("ExportImport"),
    },
  };

  // enum Temp {
  //   General = "General",
  //   Appearance = "Appearance",
  //   Filters = "Filters",
  //   FaceIdAndPasscode = "FaceId & Passcode",
  //   Accounts = "Accounts",
  //   ExportImport = "Export | Import",
  // }
  //
  // const Hello = Object.keys(Temp).map((item: string) => {
  //   const x = Temp[item] as string;
  //   return (
  //     <FormText
  //       name={x}
  //       onPress={() => navigation.navigate(item as keyof settings)}
  //     />
  //   );
  // });

  return (
    <View style={styles.container}>
      <Form>
        {Object.values(SettingsItems).map((item) => {
          return (
            <FormText key={item.name} name={item.name} onPress={item.onPress} />
          );
        })}
      </Form>

      <Form>
        <FormText name="About" onPress={() => navigation.navigate("About")} />
        <FormText name="Rate" onPress={() => navigation.navigate("Rate")} />
        <FormText name="Tip" onPress={() => navigation.navigate("Tip")} />
      </Form>
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

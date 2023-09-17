import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { Form } from "@/common/Form/Form";
import { FormItem } from "@/common/Form/FormItem";
import { FormText } from "@/common/Form/FormText";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { SettingsParamsList } from "@/constants/ScreenProps";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useThemeColor } from "@/theming/useThemeColor";

type SettingsProps = object;

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SubStackNavigation>();

  const iconColor = useThemeColor("tabIconDefault");

  const SettingsItems: Record<
    keyof Omit<SettingsParamsList, "About" | "Rate" | "Tip" | "Settings">,
    string
  > = {
    General: "General",
    Appearance: "Appearance",
    Filters: "Filters",
    FaceIdAndPasscode: "FaceId & Passcode",
    Accounts: "Accounts",
    ExportImport: "Export | Import",
  };

  return (
    <View style={styles.container}>
      <Form>
        <FormItem style={{ height: 120 }}>
          <View style={{ borderRadius: 13, padding: 10 }}>
            <Icon icon="user" color={iconColor} size={60} />
          </View>
          <Text>Account</Text>
        </FormItem>
        <FormText
          name="All Accounts"
          onPress={() => navigation.navigate("Accounts")}
        />
      </Form>
      <Form>
        {Object.entries(SettingsItems).map(([key, value]) => {
          return (
            <FormText
              key={value}
              name={value}
              onPress={() =>
                navigation.navigate(key as keyof SettingsParamsList)
              }
            />
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

import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SettingsItemProps = {};

export const SettingsItem: FC<SettingsItemProps> = (props) => {
  const colorScheme = useThemeColor("borderColor");
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colorScheme,
        borderBottomWidth: 1,
      }}
    >
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

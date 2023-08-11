import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";
import { useThemeColor } from "@/theming/useThemeColor";

export const AddServer = () => {
  const borderColor = useThemeColor("borderColor");
  return (
    <Text
      style={[
        {
          backgroundColor: borderColor,
          textAlign: "center",
        },
        styles.server,
      ]}
    >
      + Add Server
    </Text>
  );
};
const styles = StyleSheet.create({
  server: {
    width: "100%",
    fontSize: 18,
    padding: 15,
  },
});

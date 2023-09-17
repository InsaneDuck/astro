import { ScrollView, StyleSheet } from "react-native";

import { ServerSelector } from "@/app/components/AccountSwitcher/ServerSelector";
import { View } from "@/common/View";

export const AccountSwitcherScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ServerSelector />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

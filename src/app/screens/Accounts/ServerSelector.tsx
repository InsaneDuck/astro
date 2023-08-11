import { StyleSheet } from "react-native";

import { ServersList } from "@/app/screens/Accounts/ServersList";
import { View } from "@/common/View";

export const ServerSelector = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "100%" }}>
        <ServersList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});

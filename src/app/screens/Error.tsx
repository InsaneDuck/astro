import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FC } from "react";
import { StyleSheet } from "react-native";

type ErrorProps = {};
const ErrorStack = createNativeStackNavigator;
export const Error: FC<ErrorProps> = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

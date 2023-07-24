import Text from "@/components/theming/ThemedComponents/Text";
import View from "@/components/theming/ThemedComponents/View";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { FC } from "react";
import { StyleSheet } from "react-native";

type ErrorProps = {};
const ErrorStack = createNativeStackNavigator;
const Error: FC<ErrorProps> = (props) => {
  return (
    <>

      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
      </View>
    </>
  );
};

export default Error;

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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

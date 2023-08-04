import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";

type LoginSignUpProps = {};

export const LoginSignUp: FC<LoginSignUpProps> = (props) => {
  const color = useThemeColor("borderColor");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Login" });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.loginInput, { backgroundColor: color }]}
        placeholder={"Server"}
        clearButtonMode={"always"}
      />
      <TextInput
        style={[styles.loginInput, { backgroundColor: color }]}
        placeholder={"Username"}
        clearButtonMode={"always"}
      />
      <TextInput
        style={[styles.loginInput, { backgroundColor: color }]}
        placeholder={"Password"}
        clearButtonMode={"always"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  loginInput: {
    fontSize: 18,
    marginTop: 20,
    paddingEnd: 10,
    paddingStart: 10,
    borderRadius: 13,
    height: 45,
    width: "90%",
    color: "#ccc",
  },
});

import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";

import { AddServer } from "@/app/components/AccountSwitcher/AddServer";
import { View } from "@/common/View";

type LoginSignUpProps = object;

export const LoginSignUp: FC<LoginSignUpProps> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Login" });
  }, []);

  return (
    <View style={styles.container}>
      <AddServer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

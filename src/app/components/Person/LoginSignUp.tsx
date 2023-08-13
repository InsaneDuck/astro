import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";

import { List } from "@/app/components/List/List";
import { ListButton } from "@/app/components/List/ListButton";
import { ListSelect } from "@/app/components/List/ListSelect";
import { TextInputItem } from "@/app/components/List/TextInputItem";
import { View } from "@/common/View";

type LoginSignUpProps = object;

export const LoginSignUp: FC<LoginSignUpProps> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Login" });
  }, []);

  return (
    <View style={styles.container}>
      <List title="LOGIN">
        <ListSelect name="Server" selected="lemmy.world" />
        <TextInputItem placeholder="Username" />
        <TextInputItem placeholder="Password" />
      </List>
      <List>
        <ListButton name="Login" />
      </List>
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

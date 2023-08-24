import { useNavigation } from "@react-navigation/core";
import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";

import { Form } from "@/app/components/Form/Form";
import { FormButton } from "@/app/components/Form/FormButton";
import { FormInput } from "@/app/components/Form/FormInput";
import { FormSelect } from "@/app/components/Form/FormSelect";
import { View } from "@/common/View";

type LoginSignUpProps = object;

export const LoginSignUp: FC<LoginSignUpProps> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Login" });
  }, []);

  return (
    <View style={styles.container}>
      <Form title="LOGIN">
        <FormSelect name="Server" selected="lemmy.world" />
        <FormInput placeholder="Username" />
        <FormInput placeholder="Password" />
      </Form>
      <Form>
        <FormButton name="Login" />
      </Form>
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

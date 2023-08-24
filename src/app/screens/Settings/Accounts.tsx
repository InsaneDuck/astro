import { useNavigation } from "@react-navigation/core";
import React from "react";

import { Form } from "@/common/Form/Form";
import { FormText } from "@/common/Form/FormText";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

export const Accounts = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const goToLogin = (): any => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Form title="ACCOUNTS">
        <FormText name="+ Add Account" onPress={goToLogin} />
      </Form>
    </View>
  );
};

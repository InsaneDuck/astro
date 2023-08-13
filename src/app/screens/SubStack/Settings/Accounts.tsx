import { useNavigation } from "@react-navigation/core";
import React from "react";

import { List } from "@/app/components/List/List";
import { ListText } from "@/app/components/List/ListText";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

export const Accounts = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const goToLogin = (): any => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <List title="ACCOUNTS">
        <ListText name="+ Add Account" onPress={goToLogin} />
      </List>
    </View>
  );
};

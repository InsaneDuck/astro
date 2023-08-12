import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";

import { SubStackNavigation } from "@/router/SubStackLayout";

export const FeedServer = () => {
  const navigation = useNavigation<SubStackNavigation>();
  const onPress = (): any => {
    navigation.navigate("AccountSwitcher");
  };
  return <Button title="Server" onPress={onPress} />;
};

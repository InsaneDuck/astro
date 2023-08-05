import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Icon } from "@/components/common/Icon";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { RootState } from "@/store/store";

export const ProfileHeaderRight = () => {
  const loggedInStatus = useSelector(
    (state: RootState) => state.auth.authStatus,
  );
  const navigation = useNavigation<SubStackNavigation>();
  const onPress = (): any => {
    navigation.navigate("ProfileSettings");
  };
  const login = (): any => {
    navigation.navigate("LoginModal");
  };
  return (
    <TouchableOpacity onPress={onPress}>
      {loggedInStatus === "loggedIn" && <Icon icon="gear" color="#ccc" />}
      {loggedInStatus === "anonymous" && (
        <Button title="Login / Signup" onPress={login} />
      )}
    </TouchableOpacity>
  );
};

import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Icon } from "@/common/Icon";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { RootState } from "@/store/store";

export const ProfileHeaderRight = () => {
  const loggedInStatus = useSelector(
    (state: RootState) =>
      state.settings.currentSettings.Accounts.currentUser.authStatus,
  );
  const navigation = useNavigation<SubStackNavigation>();
  const onPress = (): any => {
    navigation.navigate("ProfileSettings");
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {loggedInStatus === "loggedIn" && <Icon icon="gear" color="#ccc" />}
    </TouchableOpacity>
  );
};

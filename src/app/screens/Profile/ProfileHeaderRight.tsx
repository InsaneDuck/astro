import { Icon } from "@/components/common/Icon";
import { ProfileStackNavigation } from "@/router/tabs/ProfileStackLayout";
import { RootState } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { Button, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

type ProfileHeaderRightProps = {};

export const ProfileHeaderRight: FC<ProfileHeaderRightProps> = (props) => {
  const loggedInStatus = useSelector(
    (state: RootState) => state.auth.authStatus,
  );
  const navigation = useNavigation<ProfileStackNavigation>();
  const onPress = (): any => {
    navigation.navigate("ProfileSettings");
  };
  const login = (): any => {
    navigation.navigate("LoginModal");
  };
  return (
    <TouchableOpacity onPress={onPress}>
      {loggedInStatus === "loggedIn" && <Icon icon={"gear"} color={"#ccc"} />}
      {loggedInStatus === "anonymous" && (
        <Button title={"Login / Signup"} onPress={login} />
      )}
    </TouchableOpacity>
  );
};

import { LoginSignUp } from "@/components/app/LoginSignUp";
import { UserViewComponent } from "@/components/app/ViewComponents/UserViewComponent";
import { RootState } from "@/store/store";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

type ProfileProps = {};

export const Profile: FC<ProfileProps> = () => {
  const loggedInStatus = useSelector(
    (state: RootState) => state.auth.authStatus,
  );

  switch (loggedInStatus) {
    case "anonymous":
      return <LoginSignUp />;
    case "loggedIn":
      return <UserViewComponent userType={"primary"} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

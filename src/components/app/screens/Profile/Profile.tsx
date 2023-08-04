import { LoginSignUp } from "@/components/app/screens/Profile/LoginSignUp";
import { UserViewComponent } from "@/components/app/UserViewComponent";
import { RootState } from "@/store/store";
import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

type ProfileProps = {};

export const Profile: FC<ProfileProps> = () => {
  const loggedInStatus = useSelector(
    (state: RootState) => state.auth.authStatus,
  );
  useEffect(() => {}, []);
  return (
    <>
      {loggedInStatus === "loggedIn" && (
        <UserViewComponent userType={"primary"} />
      )}
      {loggedInStatus === "anonymous" && <LoginSignUp />}
    </>
  );
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

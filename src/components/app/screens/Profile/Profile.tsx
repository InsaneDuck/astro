import { UserViewComponent } from "@/components/app/UserViewComponent";
import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";

type ProfileProps = {};

export const Profile: FC<ProfileProps> = () => {
  useEffect(() => {}, []);
  return <UserViewComponent />;
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

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";

type ProfileStackLayoutProps = {};

export type ProfileStackParamsList = {
  Profile: undefined;
};

export type ProfileStackNavigation =
  NativeStackNavigationProp<ProfileStackParamsList>;
export const ProfileStackLayout: FC<ProfileStackLayoutProps> = (props) => {
  return <></>;
};

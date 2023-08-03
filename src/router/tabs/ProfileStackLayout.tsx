import { Profile } from "@/components/app/screens/Profile/Profile";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

type ProfileStackLayoutProps = {};

export type ProfileStackParamsList = {
  Profile: undefined;
};

export type ProfileStackNavigation =
  NativeStackNavigationProp<ProfileStackParamsList>;
const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();
export const ProfileStackLayout: FC<ProfileStackLayoutProps> = (props) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={"Profile"} component={Profile} />
    </ProfileStack.Navigator>
  );
};

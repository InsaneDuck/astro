import { LoginSignUp } from "@/components/app/screens/Profile/LoginSignUp";
import { Profile } from "@/components/app/screens/Profile/Profile";
import { ProfileHeaderRight } from "@/components/app/screens/Profile/ProfileHeaderRight";
import { ProfileSettings } from "@/components/app/screens/Profile/ProfileSettings";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

type ProfileStackLayoutProps = {};

export type ProfileStackParamsList = {
  Profile: undefined;
  ProfileSettings: undefined;
  LoginModal: undefined;
};

export type ProfileStackNavigation =
  NativeStackNavigationProp<ProfileStackParamsList>;
const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();

export const ProfileStackLayout: FC<ProfileStackLayoutProps> = (props) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={"Profile"}
        component={Profile}
        options={{
          headerRight: ProfileHeaderRight,
        }}
      />
      <ProfileStack.Screen
        name={"ProfileSettings"}
        component={ProfileSettings}
      />
      <ProfileStack.Screen
        name={"LoginModal"}
        component={LoginSignUp}
        options={{ presentation: "modal" }}
      />
    </ProfileStack.Navigator>
  );
};

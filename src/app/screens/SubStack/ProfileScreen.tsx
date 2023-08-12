import React, { FC } from "react";
import { useSelector } from "react-redux";

import { LoginSignUp } from "@/app/components/LoginSignUp";
import { UserViewComponent } from "@/app/components/ViewComponents/Community/User/UserViewComponent";
import { RootState } from "@/store/store";

type ProfileProps = object;

export const ProfileScreen: FC<ProfileProps> = () => {
  const loggedInStatus = useSelector(
    (state: RootState) => state.auth.authStatus,
  );

  switch (loggedInStatus) {
    case "anonymous":
      return <LoginSignUp />;
    case "loggedIn":
      return <UserViewComponent userType="primary" />;
  }
};

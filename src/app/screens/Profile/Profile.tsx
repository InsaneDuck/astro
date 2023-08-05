import React, { FC } from "react";
import { useSelector } from "react-redux";

import { LoginSignUp } from "@/components/app/LoginSignUp";
import { UserViewComponent } from "@/components/app/ViewComponents/UserViewComponent";
import { RootState } from "@/store/store";

type ProfileProps = object;

export const Profile: FC<ProfileProps> = () => {
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

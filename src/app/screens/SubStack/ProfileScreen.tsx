import React, { FC } from "react";
import { useSelector } from "react-redux";

import { LoginSignUp } from "@/app/components/Person/LoginSignUp";
import { PersonViewComponent } from "@/app/components/Person/PersonViewComponent";
import { selectCurrentServer } from "@/store/auth-slice";

type ProfileProps = object;

export const ProfileScreen: FC<ProfileProps> = () => {
  const loggedInStatus = useSelector(selectCurrentServer);

  switch (loggedInStatus) {
    case "anonymous":
      return <LoginSignUp />;
    case "loggedIn":
      return <PersonViewComponent userType="primary" />;
  }
};

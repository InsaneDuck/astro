import { UserViewComponent } from "@/components/app/UserViewComponent";
import React, { FC } from "react";

type UserScreenProps = {};

export const User: FC<UserScreenProps> = (props) => {
  return <UserViewComponent />;
};

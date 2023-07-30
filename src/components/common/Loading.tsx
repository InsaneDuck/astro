import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

type LoadingProps = {};

export const Loading: FC<LoadingProps> = (props) => {
  return <ActivityIndicator size="large" color="#000" />;
};

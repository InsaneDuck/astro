import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";

type SearchStackLayoutProps = {};

export type SearchStackParamsList = {
  Search: undefined;
};

export type SearchStackNavigation =
  NativeStackNavigationProp<SearchStackParamsList>;
export const SearchStackLayout: FC<SearchStackLayoutProps> = (props) => {
  return <></>;
};

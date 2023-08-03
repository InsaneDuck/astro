import { Search } from "@/components/app/screens/Search/Search";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

type SearchStackLayoutProps = {};

export type SearchStackParamsList = {
  Search: undefined;
};

export type SearchStackNavigation =
  NativeStackNavigationProp<SearchStackParamsList>;
const SearchStack = createNativeStackNavigator<SearchStackParamsList>();
export const SearchStackLayout: FC<SearchStackLayoutProps> = (props) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={"Search"} component={Search} />
    </SearchStack.Navigator>
  );
};

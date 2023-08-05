import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { Search } from "@/app/screens/Search/Search";

type SearchStackLayoutProps = object;

export type SearchStackParamsList = {
  Search: undefined;
};

export type SearchStackNavigation =
  NativeStackNavigationProp<SearchStackParamsList>;
const SearchStack = createNativeStackNavigator<SearchStackParamsList>();
export const SearchStackLayout: FC<SearchStackLayoutProps> = (props) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
};

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { AllCommunities } from "@/app/screens/Search/AllCommunities";
import { Search } from "@/app/screens/Search/Search";
import { CommunityViewComponent } from "@/components/app/ViewComponents/CommunityViewComponent";

type SearchStackLayoutProps = object;

export type SearchStackParamsList = {
  Search: undefined;
  AllCommunities: undefined;
  Community: undefined;
};

export type SearchStackNavigation =
  NativeStackNavigationProp<SearchStackParamsList>;
const SearchStack = createNativeStackNavigator<SearchStackParamsList>();
export const SearchStackLayout: FC<SearchStackLayoutProps> = (props) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="AllCommunities" component={AllCommunities} />
      <SearchStack.Screen
        name="Community"
        component={CommunityViewComponent}
        options={{
          title: "Community",
        }}
      />
    </SearchStack.Navigator>
  );
};

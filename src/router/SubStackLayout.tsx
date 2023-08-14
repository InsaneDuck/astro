import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { screens } from "@/constants/Screens";

type SubStackLayoutProps = {
  initialRoute: keyof SubStackParamsList;
};
export type SubStackParamsList = {
  About: undefined;
  Accounts: undefined;
  AccountSwitcher: undefined;
  AllCommunities: undefined;
  Appearance: undefined;
  Community: undefined;
  CommunityInfo: undefined;
  CreatePost: undefined;
  ExportImport: undefined;
  FaceIdAndPasscode: undefined;
  Filters: undefined;
  General: undefined;
  Inbox: undefined;
  Login: undefined;
  MainFeed: undefined;
  Post: undefined;
  Profile: undefined;
  ProfileSettings: undefined;
  Rate: undefined;
  Search: undefined;
  Settings: undefined;
  Tip: undefined;
  User: undefined;
};
export type SubStackNavigation = NativeStackNavigationProp<SubStackParamsList>;

const SubStack = createNativeStackNavigator<SubStackParamsList>();
const s = Object.values(screens).map((screen, index) => (
  <SubStack.Screen key={index} {...screen} />
));
export const SubStackLayout: FC<SubStackLayoutProps> = (props) => {
  return (
    <SubStack.Navigator initialRouteName={props.initialRoute}>
      {s}
    </SubStack.Navigator>
  );
};

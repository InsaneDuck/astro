import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { settings, shared } from "@/constants/ScreenProps";

type SubStackLayoutProps = {
  initialRoute: keyof SubStackParamsList;
};
export type SubStackParamsList = SharedParamsList & SettingsParamsList;
export type SharedParamsList = {
  AccountSwitcher: undefined;
  AllCommunities: undefined;
  Community: undefined;
  CommunityInfo: undefined;
  CreatePost: undefined;
  Inbox: undefined;
  Login: undefined;
  MainFeed: undefined;
  Post: undefined;
  Profile: undefined;
  ProfileSettings: undefined;
  Search: undefined;
  User: undefined;
};
export type SettingsParamsList = {
  About: undefined;
  Accounts: undefined;
  Appearance: undefined;
  ExportImport: undefined;
  FaceIdAndPasscode: undefined;
  Filters: undefined;
  General: undefined;
  Rate: undefined;
  Settings: undefined;
  Tip: undefined;
};
export type SubStackNavigation = NativeStackNavigationProp<SubStackParamsList>;

const SubStack = createNativeStackNavigator<SubStackParamsList>();
const sharedScreens = Object.values(shared).map((screen, index) => (
  <SubStack.Screen key={index} {...screen} />
));
const settingsScreens = Object.values(settings).map((screen, index) => (
  <SubStack.Screen key={index} {...screen} />
));

export const SubStackLayout: FC<SubStackLayoutProps> = (props) => {
  return (
    <SubStack.Navigator initialRouteName={props.initialRoute}>
      {props.initialRoute !== "Settings" && sharedScreens}
      {props.initialRoute === "Settings" && settingsScreens}
    </SubStack.Navigator>
  );
};

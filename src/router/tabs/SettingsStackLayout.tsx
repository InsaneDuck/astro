import { Appearance } from "@/components/app/screens/Settings/Appearance";
import { Settings } from "@/components/app/screens/Settings/Settings";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

export type SettingsStackParamList = {
  Settings: undefined;
  General: undefined;
  Appearance: undefined;
  Filters: undefined;
  FaceIdAndPasscode: undefined;
  Accounts: undefined;
  ExportImport: undefined;
  About: undefined;
  Rate: undefined;
  Tip: undefined;
};

export type SettingsStackNavigation =
  NativeStackNavigationProp<SettingsStackParamList>;
type SettingsStackLayoutProps = {};
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
export const SettingsStackLayout: FC<SettingsStackLayoutProps> = (props) => {
  return (
    <SettingsStack.Navigator initialRouteName={"Settings"}>
      <SettingsStack.Screen name={"Settings"} children={Settings} />
      <SettingsStack.Screen name={"Appearance"} children={Appearance} />
      <SettingsStack.Screen name={"Filters"} children={Appearance} />
      <SettingsStack.Screen name={"FaceIdAndPasscode"} children={Appearance} />
      <SettingsStack.Screen name={"Accounts"} children={Appearance} />
      <SettingsStack.Screen name={"ExportImport"} children={Appearance} />
      <SettingsStack.Screen name={"About"} children={Appearance} />
      <SettingsStack.Screen name={"Rate"} children={Appearance} />
      <SettingsStack.Screen name={"Tip"} children={Appearance} />
    </SettingsStack.Navigator>
  );
};

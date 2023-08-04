import { About } from "@/app/screens/Settings/About";
import { Accounts } from "@/app/screens/Settings/Accounts";
import { Appearance } from "@/app/screens/Settings/Appearance";
import { ExportImport } from "@/app/screens/Settings/ExportImport";
import { FaceIdAndPasscode } from "@/app/screens/Settings/FaceIdAndPasscode";
import { Filters } from "@/app/screens/Settings/Filters";
import { General } from "@/app/screens/Settings/General";
import { Rate } from "@/app/screens/Settings/Rate";
import { Settings } from "@/app/screens/Settings/Settings";
import { Tip } from "@/app/screens/Settings/Tip";

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
      <SettingsStack.Screen name={"General"} children={General} />
      <SettingsStack.Screen name={"Appearance"} children={Appearance} />
      <SettingsStack.Screen name={"Filters"} children={Filters} />
      <SettingsStack.Screen
        name={"FaceIdAndPasscode"}
        children={FaceIdAndPasscode}
      />
      <SettingsStack.Screen name={"Accounts"} children={Accounts} />
      <SettingsStack.Screen name={"ExportImport"} children={ExportImport} />
      <SettingsStack.Screen name={"About"} children={About} />
      <SettingsStack.Screen name={"Rate"} children={Rate} />
      <SettingsStack.Screen name={"Tip"} children={Tip} />
    </SettingsStack.Navigator>
  );
};

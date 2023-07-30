import { Appearance } from "@/app/screens/Tabs/Settings/Appearance";
import { Settings } from "@/app/screens/Tabs/Settings/Settings";
import { SettingsRoutes, SettingsRouteType } from "@/constants/Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { useColorScheme } from "react-native";

type LayoutProps = {};
const SettingsStack = createNativeStackNavigator<SettingsRouteType>();
export const SettingsStackLayout: FC<LayoutProps> = (props) => {
  const colorScheme = useColorScheme();
  return (
    <SettingsStack.Navigator
      initialRouteName={SettingsRoutes.Home}
      screenOptions={{ headerShown: false }}
    >
      <SettingsStack.Screen name={SettingsRoutes.Home} children={Settings} />
      <SettingsStack.Screen
        name={SettingsRoutes.Appearance}
        children={Appearance}
      />
    </SettingsStack.Navigator>
  );
};

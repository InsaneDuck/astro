import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";

import { Icon } from "@/common/Icon";
import { SubStackLayout } from "@/router/SubStackLayout";
import { useThemeColor } from "@/theming/useThemeColor";

export type MainTabsParamsList = {
  FeedStack: undefined;
  CommunitiesStack: undefined;
  InboxStack: undefined;
  ProfileStack: undefined;
  SearchStack: undefined;
  SettingsStack: undefined;
};

export type MainTabsNavigation = BottomTabNavigationProp<MainTabsParamsList>;

const Tabs = createBottomTabNavigator<MainTabsParamsList>();
export const MainTabLayout = () => {
  const colorScheme = useThemeColor("tint");

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorScheme,
        headerShown: false,
      }}
      initialRouteName="FeedStack"
    >
      <Tabs.Screen
        name="FeedStack"
        children={() => <SubStackLayout initialRoute="MainFeed" />}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => <Icon icon="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="CommunitiesStack"
        children={() => <SubStackLayout initialRoute="Communities" />}
        options={{
          tabBarLabel: "Communities",
          tabBarIcon: ({ color }) => <Icon icon="users" color={color} />,
        }}
      />

      <Tabs.Screen
        name="SearchStack"
        children={() => <SubStackLayout initialRoute="Search" />}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => <Icon icon="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="InboxStack"
        children={() => <SubStackLayout initialRoute="Inbox" />}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => <Icon icon="inbox" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProfileStack"
        children={() => <SubStackLayout initialRoute="Profile" />}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Icon icon="user" color={color} />,
        }}
      />

      <Tabs.Screen
        name="SettingsStack"
        children={() => <SubStackLayout initialRoute="Settings" />}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => <Icon icon="gear" color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";

import { Icon } from "@/components/common/Icon";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { FeedStackLayout } from "@/router/tabs/FeedStackLayout";
import { InboxStackLayout } from "@/router/tabs/InboxStackLayout";
import { ProfileStackLayout } from "@/router/tabs/ProfileStackLayout";
import { SearchStackLayout } from "@/router/tabs/SearchStackLayout";
import { SettingsStackLayout } from "@/router/tabs/SettingsStackLayout";

export type MainTabsParamsList = {
  FeedStack: undefined;
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
      initialRouteName="ProfileStack"
    >
      <Tabs.Screen
        name="FeedStack"
        component={FeedStackLayout}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => <Icon icon="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="InboxStack"
        component={InboxStackLayout}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color }) => <Icon icon="inbox" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStackLayout}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Icon icon="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SearchStack"
        component={SearchStackLayout}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => <Icon icon="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SettingsStack"
        component={SettingsStackLayout}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => <Icon icon="gear" color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

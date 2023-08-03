import { Inbox } from "@/components/app/screens/Inbox/Inbox";
import { Profile } from "@/components/app/screens/Profile/Profile";
import { Search } from "@/components/app/screens/Search/Search";
import { Icon } from "@/components/common/Icon";

import { useThemeColor } from "@/components/theming/useThemeColor";
import { FeedStackLayout } from "@/router/tabs/FeedStackLayout";
import { SettingsStackLayout } from "@/router/tabs/SettingsStackLayout";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";

export type MainTabsParamsList = {
  FeedStack: undefined;
  InboxStack: undefined;
  ProfileStack: undefined;
  SearchStack: undefined;
  SettingsStack: undefined;
};

export type MainTabsNavigation = BottomTabNavigationProp<MainTabsParamsList>;

const Tab = createBottomTabNavigator<MainTabsParamsList>();
export const MainTabLayout = () => {
  const colorScheme = useThemeColor("tint");

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorScheme,
      }}
      initialRouteName={"SettingsStack"}
    >
      <Tab.Screen
        name="FeedStack"
        component={FeedStackLayout}
        options={{
          tabBarLabel: "Feed",
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon icon="house" color={color} />,
        }}
      />
      <Tab.Screen
        name="InboxStack"
        component={Inbox}
        options={{
          tabBarLabel: "Inbox",
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon icon="inbox" color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon icon="user" color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={Search}
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon icon="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackLayout}
        options={{
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon icon={"gear"} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

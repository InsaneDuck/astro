import { Feed } from "@/components/app/main-stack-screens/Tabs/Feed/Feed";
import { FeedSorter } from "@/components/app/main-stack-screens/Tabs/Feed/FeedSorter";
import { Inbox } from "@/components/app/main-stack-screens/Tabs/Inbox/Inbox";
import { Profile } from "@/components/app/main-stack-screens/Tabs/Profile/Profile";
import { Search } from "@/components/app/main-stack-screens/Tabs/Search/Search";
import { Settings } from "@/components/app/main-stack-screens/Tabs/Settings/Settings";
import { Icon } from "@/components/common/Icon";

import { useThemeColor } from "@/components/theming/useThemeColor";
import { SettingsStackLayout } from "@/router/tab-layout/tabs/SettingsStackLayout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";

type TabsLayoutProps = {};
const Tab = createBottomTabNavigator();
export const MainTabLayout: FC<TabsLayoutProps> = () => {
  const colorScheme = useThemeColor("tint");

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorScheme,
      }}
      initialRouteName={"Search"}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => <Icon icon="house" color={color} />,
          headerRight: FeedSorter,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => <Icon icon="inbox" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Icon icon="user" color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Icon icon="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackLayout}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Icon icon={"gear"} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

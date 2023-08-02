import { Feed } from "@/app/screens/Tabs/Feed/Feed";
import { FeedSorter } from "@/app/screens/Tabs/Feed/FeedSorter";
import { Inbox } from "@/app/screens/Tabs/Inbox/Inbox";
import { Profile } from "@/app/screens/Tabs/Profile/Profile";
import { Search } from "@/app/screens/Tabs/Search/Search";
import { Settings } from "@/app/screens/Tabs/Settings/Settings";
import { SettingsStackLayout } from "@/app/screens/Tabs/Settings/SettingsStackLayout";
import { Icon } from "@/components/common/Icon";

import { useThemeColor } from "@/components/theming/useThemeColor";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";

type TabsLayoutProps = {};
const Tab = createBottomTabNavigator();
export const TabLayout: FC<TabsLayoutProps> = () => {
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

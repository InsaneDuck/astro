import { Feed } from "@/app/screens/Tabs/Feed/Feed";
import { Inbox } from "@/app/screens/Tabs/Inbox/Inbox";
import { Profile } from "@/app/screens/Tabs/Profile/Profile";
import { Search } from "@/app/screens/Tabs/Search/Search";
import { Settings } from "@/app/screens/Tabs/Settings/Settings";
import { Icon } from "@/components/common/Icon";

import { useThemeColor } from "@/theming/useThemeColor";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";

type TabsProps = {};
const Tab = createBottomTabNavigator();
export const Tabs: FC<TabsProps> = () => {
  const colorScheme = useThemeColor("tint");
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorScheme,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => <Icon name="feed" color={color} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => <Icon name="inbox" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Icon name="search" color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Icon name="gear" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

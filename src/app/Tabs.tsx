import { Feed } from "@/app/screens/Tabs/Feed/Feed";
import { FeedSorter } from "@/app/screens/Tabs/Feed/FeedSorter";
import { Inbox } from "@/app/screens/Tabs/Inbox/Inbox";
import { Profile } from "@/app/screens/Tabs/Profile/Profile";
import { Search } from "@/app/screens/Tabs/Search/Search";
import { Settings } from "@/app/screens/Tabs/Settings/Settings";
import { SettingsStackLayout } from "@/app/screens/Tabs/Settings/SettingsStackLayout";
import { Icon } from "@/components/common/Icon";
import { IconButton } from "@/components/common/IconButton";
import { MainNavigation, MainRoutes } from "@/constants/Navigation";

import { useThemeColor } from "@/theming/useThemeColor";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";

type TabsProps = {};
const Tab = createBottomTabNavigator();
export const Tabs: FC<TabsProps> = () => {
  const colorScheme = useThemeColor("tint");
  //todo remove this boi
  const feedHeaderRight = () => {
    const navigation = useNavigation<MainNavigation>();
    const pressed = () => {
      navigation.navigate(MainRoutes.Modal);
    };

    return <IconButton onPress={pressed} name={"info-circle"} />;
  };

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

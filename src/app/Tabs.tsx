import Feed from "@/app/screens/Feed";
import Inbox from "@/app/screens/Inbox";
import Profile from "@/app/screens/Profile";
import Search from "@/app/screens/Search";
import Settings from "@/app/screens/Settings";
import Icon from "@/components/common/Icon";
import Colors from "@/components/theming/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { useColorScheme } from "react-native";

type TabsProps = {};
const Tab = createBottomTabNavigator();
const Tabs: FC<TabsProps> = (props) => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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

export default Tabs;

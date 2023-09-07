import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteConfig } from "@react-navigation/core";
import { TabNavigationState } from "@react-navigation/native";
import React from "react";

import { Icon } from "@/common/Icon";
import { SubStackParamsList } from "@/constants/ScreenProps";

export type MainTabsParamsList = {
  FeedStack: undefined;
  CommunitiesStack: undefined;
  InboxStack: undefined;
  ProfileStack: undefined;
  SearchStack: undefined;
  SettingsStack: undefined;
};

export type TabScreenProps = {
  children: keyof SubStackParamsList;
} & Omit<
  RouteConfig<
    MainTabsParamsList,
    keyof MainTabsParamsList,
    TabNavigationState<ParamListBase>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >,
  "children"
>;

const tabs: Record<keyof MainTabsParamsList, TabScreenProps> = {
  FeedStack: {
    name: "FeedStack",
    children: "MainFeed",
    options: {
      tabBarLabel: "Feed",
      tabBarIcon: ({ color }) => <Icon icon="house" color={color} />,
    },
  },
  CommunitiesStack: {
    name: "CommunitiesStack",
    children: "Communities",
    options: {
      tabBarLabel: "Communities",
      tabBarIcon: ({ color }) => <Icon icon="users" color={color} />,
    },
  },
  SearchStack: {
    name: "SearchStack",
    children: "Search",
    options: {
      tabBarLabel: "Search",
      tabBarIcon: ({ color }) => <Icon icon="search" color={color} />,
    },
  },
  InboxStack: {
    name: "InboxStack",
    children: "Inbox",
    options: {
      tabBarLabel: "Inbox",
      tabBarIcon: ({ color }) => <Icon icon="inbox" color={color} />,
    },
  },
  ProfileStack: {
    name: "ProfileStack",
    children: "Profile",
    options: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ color }) => <Icon icon="user" color={color} />,
    },
  },
  SettingsStack: {
    name: "SettingsStack",
    children: "Settings",
    options: {
      tabBarLabel: "Settings",
      tabBarIcon: ({ color }) => <Icon icon="gear" color={color} />,
    },
  },
};

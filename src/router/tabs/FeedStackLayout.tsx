import { Community } from "@/components/app/screens/Community/Community";
import { Feed } from "@/components/app/screens/FeedScreen/Feed";
import { FeedSorter } from "@/components/app/screens/FeedScreen/FeedSorter";
import { User } from "@/components/app/screens/FeedScreen/User";
import { Post } from "@/components/app/screens/Post/Post";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";

export type FeedStackParamList = {
  Feed: undefined;
  Post: undefined;
  User: undefined;
  Community: undefined;
};

export type FeedStackNavigation = NativeStackNavigationProp<FeedStackParamList>;
const FeedStack = createNativeStackNavigator<FeedStackParamList>();
export const FeedStackLayout = () => {
  return (
    <FeedStack.Navigator initialRouteName={"Feed"}>
      <FeedStack.Screen
        name={"Feed"}
        children={Feed}
        options={{
          title: "Feed",
          headerRight: FeedSorter,
        }}
      />
      <FeedStack.Screen
        name={"Post"}
        children={Post}
        options={{
          title: "Post",
        }}
      />
      <FeedStack.Screen
        name={"User"}
        children={User}
        options={{
          title: "User",
        }}
      />
      <FeedStack.Screen
        name={"Community"}
        children={Community}
        options={{
          title: "Community",
        }}
      />
    </FeedStack.Navigator>
  );
};

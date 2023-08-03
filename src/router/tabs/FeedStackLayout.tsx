import { Feed } from "@/components/app/screens/FeedScreen/Feed";
import { FeedSorter } from "@/components/app/screens/FeedScreen/FeedSorter";
import { Post } from "@/components/app/screens/Post/Post";
import { UserScreen } from "@/components/app/screens/UserScreen";

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
        children={UserScreen}
        options={{
          title: "User",
        }}
      />
      <FeedStack.Screen
        name={"Community"}
        children={Feed}
        options={{
          title: "Community",
        }}
      />
    </FeedStack.Navigator>
  );
};

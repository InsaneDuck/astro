import { MainFeed } from "@/app/screens/MainFeed";
import { Post } from "@/app/screens/Post/Post";
import { CommunityViewComponent } from "@/components/app/ViewComponents/CommunityViewComponent";
import { FeedSorter } from "@/components/app/ViewComponents/Feed/FeedSorter";

import { UserViewComponent } from "@/components/app/ViewComponents/UserViewComponent";

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
        children={MainFeed}
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
        children={() => <UserViewComponent userType={"clicked"} />}
        options={{
          title: "User",
        }}
      />
      <FeedStack.Screen
        name={"Community"}
        children={CommunityViewComponent}
        options={{
          title: "Community",
        }}
      />
    </FeedStack.Navigator>
  );
};

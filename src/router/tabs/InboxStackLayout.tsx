import { Inbox } from "@/components/app/screens/Inbox/Inbox";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";

export type InboxStackParamsList = {
  Inbox: undefined;
};

export type InboxStackNavigation =
  NativeStackNavigationProp<InboxStackParamsList>;
const InboxStack = createNativeStackNavigator<InboxStackParamsList>();
export const InboxStackLayout = () => {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen name={"Inbox"} component={Inbox} />
    </InboxStack.Navigator>
  );
};

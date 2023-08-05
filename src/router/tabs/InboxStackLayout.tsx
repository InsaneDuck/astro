import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";

import { Inbox } from "@/app/screens/Inbox/Inbox";

export type InboxStackParamsList = {
  Inbox: undefined;
};

export type InboxStackNavigation =
  NativeStackNavigationProp<InboxStackParamsList>;
const InboxStack = createNativeStackNavigator<InboxStackParamsList>();
export const InboxStackLayout = () => {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen name="Inbox" component={Inbox} />
    </InboxStack.Navigator>
  );
};

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { settings, shared, SubStackParamsList } from "@/constants/ScreenProps";

type SubStackLayoutProps = {
  initialRoute: keyof SubStackParamsList;
};

export type SubStackNavigation = NativeStackNavigationProp<SubStackParamsList>;

const SubStack = createNativeStackNavigator<SubStackParamsList>();
const sharedScreens = Object.values(shared).map((screen, index) => (
  <SubStack.Screen key={index} {...screen} />
));
const settingsScreens = Object.values(settings).map((screen, index) => (
  <SubStack.Screen key={index} {...screen} />
));

export const SubStackLayout: FC<SubStackLayoutProps> = (props) => {
  return (
    <SubStack.Navigator initialRouteName={props.initialRoute}>
      {props.initialRoute !== "Settings" && sharedScreens}
      {props.initialRoute === "Settings" && settingsScreens}
    </SubStack.Navigator>
  );
};

import { Error } from "@/components/app/screens/Error";
import { ImageViewer } from "@/components/app/screens/ImageViewer/ImageViewer";
import { ImageViewerButtons } from "@/components/app/screens/ImageViewer/ImageViewerButtons";
import { Modal } from "@/components/app/screens/Modal";
import { MainTabLayout } from "@/router/MainTabLayout";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";
import { useColorScheme } from "react-native";

type LayoutProps = {};

export type MainStackParamList = {
  Home: undefined;
  Error: undefined;
  Modal: undefined;
  ImageViewer: undefined;
};

export type MainStackNavigation = NativeStackNavigationProp<MainStackParamList>;
const MainStack = createNativeStackNavigator<MainStackParamList>();
export const MainStackLayout: FC<LayoutProps> = () => {
  //todo get from system or from user preferences
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <MainStack.Navigator initialRouteName={"Home"}>
          <MainStack.Screen
            name={"Home"}
            component={MainTabLayout}
            options={{
              headerShown: false,
            }}
          />

          <MainStack.Screen
            name={"Modal"}
            component={Modal}
            options={{ presentation: "modal" }}
          />
          <MainStack.Screen
            name={"Error"}
            component={Error}
            options={{ title: "Oops!" }}
          />
          <MainStack.Screen
            name={"ImageViewer"}
            component={ImageViewer}
            options={{
              presentation: "card",
              title: "",
              headerRight: (props) => <ImageViewerButtons />,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
import { Error } from "@/app/screens/Error";
import { ImageViewer } from "@/app/screens/ImageViewer";
import { Modal } from "@/app/screens/Modal";
import { Post } from "@/app/screens/Post/Post";
import { Tabs } from "@/app/Tabs";
import { MainRoutes, MainRouteType } from "@/constants/Navigation";
import { store } from "@/store/store";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";

type LayoutProps = {};

const MainStack = createNativeStackNavigator<MainRouteType>();
export const MainStackLayout: FC<LayoutProps> = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <NavigationContainer
          theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <MainStack.Navigator initialRouteName={MainRoutes.Home}>
            <MainStack.Screen
              name={MainRoutes.Home}
              children={Tabs}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name={MainRoutes.Post}
              children={Post}
              options={{ title: "Post" }}
            />
            <MainStack.Screen
              name={MainRoutes.Modal}
              children={Modal}
              options={{ title: "Modal", presentation: "modal" }}
            />
            <MainStack.Screen
              name={MainRoutes.Error}
              children={Error}
              options={{ title: "Oops!" }}
            />
            <MainStack.Screen
              name={MainRoutes.ImageViewer}
              children={ImageViewer}
              options={{
                title: "ImageViewer",
                presentation: "card",
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

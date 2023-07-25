import Error from "@/app/screens/Error";
import ImageViewer from "@/app/screens/ImageViewer";
import Modal from "@/app/screens/Modal";
import Post from "@/app/screens/Post";
import Tabs from "@/app/Tabs";
import { NavigationRoutes, RootStackParamList } from "@/constants/Navigation";
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

const Stack = createNativeStackNavigator<RootStackParamList>();
const Layout: FC<LayoutProps> = (props) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <NavigationContainer
          theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack.Navigator initialRouteName={NavigationRoutes.Home}>
            <Stack.Screen
              name={"Home"}
              children={Tabs}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={NavigationRoutes.Post}
              children={Post}
              options={{ title: "Post" }}
            />
            <Stack.Screen
              name={NavigationRoutes.Modal}
              children={Modal}
              options={{ title: "Modal", presentation: "modal" }}
            />
            <Stack.Screen
              name={NavigationRoutes.Error}
              children={Error}
              options={{ title: "Oops!" }}
            />
            <Stack.Screen
              name={NavigationRoutes.ImageViewer}
              children={ImageViewer}
              options={{ title: "ImageViewer" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default Layout;

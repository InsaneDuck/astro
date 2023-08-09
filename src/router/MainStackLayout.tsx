import { useNavigation } from "@react-navigation/core";
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
import { Button, useColorScheme } from "react-native";

import { Error } from "@/app/screens/Error";
import { ImageViewer } from "@/app/screens/ImageViewer/ImageViewer";
import { ImageViewerButtons } from "@/app/screens/ImageViewer/ImageViewerButtons";
import { TestScreen } from "@/app/screens/TestScreen";
import { MainTabLayout } from "@/router/MainTabLayout";

type LayoutProps = object;

export type MainStackParamList = {
  Home: undefined;
  Error: undefined;
  Test: undefined;
  ImageViewer: undefined;
};

export type MainStackNavigation = NativeStackNavigationProp<MainStackParamList>;
const MainStack = createNativeStackNavigator<MainStackParamList>();
export const MainStackLayout: FC<LayoutProps> = () => {
  //todo get from system or from user preferences
  const colorScheme = useColorScheme();

  const ImageActions = (props: any) => <ImageViewerButtons />;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <MainStack.Navigator initialRouteName="Test">
          <MainStack.Screen
            name="Home"
            component={MainTabLayout}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="ImageViewer"
            component={ImageViewer}
            options={{
              presentation: "card",
              title: "",
              headerRight: ImageActions,
            }}
          />
          <MainStack.Screen
            name="Error"
            component={Error}
            options={{ title: "Oops!", presentation: "modal" }}
          />
          <MainStack.Screen
            name="Test"
            component={TestScreen}
            options={{ title: "Test", headerRight: GoHome }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const GoHome = () => {
  const navigation = useNavigation<MainStackNavigation>();
  return <Button title="Home" onPress={() => navigation.navigate("Home")} />;
};

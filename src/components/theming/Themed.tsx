import { GestureResponderEvent } from "react-native";

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ClickProps = {
  onPress?: Press;
};

export type Press = ((event: GestureResponderEvent) => void) | null | undefined;

import { useColorScheme } from "react-native";

import Colors from "@/theming/Colors";

/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

type color = { light?: string; dark?: string };

type ElementName = keyof typeof Colors.light & keyof typeof Colors.dark;
//to get color from a central Store
export const useThemeColor = (elementName: ElementName) => {
  const theme = useColorScheme() ?? "light";
  return Colors[theme][elementName];
};

//to pass two different color schemes and pick them depending on system theme
export const useCustomThemeColor = (props: color) => {
  const theme = useColorScheme() ?? "light";
  return props[theme];
};

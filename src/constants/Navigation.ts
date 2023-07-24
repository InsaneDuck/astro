import { NavigationProp } from "@react-navigation/core";

export const NavigationRoutes = {
  Home: "Home",
  Post: "Post",
  Error: "Error",
};

export const NavigationRoutesList = Object.values(NavigationRoutes);
export type RootStackParamList = Record<
  (typeof NavigationRoutesList)[number],
  undefined
>;
export type StackNavigation = NavigationProp<RootStackParamList>;

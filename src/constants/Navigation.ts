import { NavigationProp } from "@react-navigation/core";

export const MainRoutes = {
  Home: "Home",
  Post: "Post",
  Error: "Error",
  Modal: "Modal",
  ImageViewer: "ImageViewer",
};

export const MainRoutesList = Object.values(MainRoutes);
export type MainRouteType = Record<(typeof MainRoutesList)[number], undefined>;
export type MainNavigation = NavigationProp<MainRouteType>;

export const SettingsRoutes = {
  Home: "Home",
  General: "General",
  Appearance: "Appearance",
  Filters: "Filters",
  Export: "Export",
  About: "About",
};

export const SettingsRoutesList = Object.values(SettingsRoutes);
export type SettingsRouteType = Record<
  (typeof SettingsRoutesList)[number],
  undefined
>;
export type SettingsNavigation = NavigationProp<SettingsRouteType>;

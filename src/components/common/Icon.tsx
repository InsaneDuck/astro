import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { FC } from "react";

type IconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export const Icon: FC<IconProps> = (props) => (
  <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
);

import React, { FC, ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

type LisItemProps = {
  onPress?: Press;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const ListItem: FC<LisItemProps> = (props) => {
  const borderColor = useThemeColor("borderColor");
  const view = useThemeColor("background");
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.touchable,
        props.style,
        { backgroundColor: borderColor, borderColor: view },
      ]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
  },
});

import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { Icon, IconProps } from "@/common/Icon";
import { Text } from "@/common/Text";
import { ConstantColors } from "@/theming/Colors";
import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

type ButtonProps = {
  type: "icon" | "image" | "iosRoundedBlue" | "edit";
  onPress?: Press;
  options?: IconProps;
  text?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const { type, onPress, options } = props;
  const tabIconDefault = useThemeColor("tabIconDefault");
  const Type = () => {
    switch (type) {
      case "icon": {
        return options && <Icon icon={options.icon} color={options.color} />;
      }
      case "image": {
        return <></>;
      }
      case "iosRoundedBlue": {
        return <Text style={styles.iosRoundedBlueText}>{props.text}</Text>;
      }
      case "edit": {
        return <Icon icon="edit" color={tabIconDefault} size={20} />;
      }
    }
  };

  const buttonStyle: StyleProp<ViewStyle> = (function () {
    switch (type) {
      case "icon":
        return {};
      case "image":
        return {};
      case "iosRoundedBlue":
        return styles.iosRoundedBlue;
      case "edit":
        return { right: 0, bottom: 0, position: "absolute", margin: 10 };
    }
  })();

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Type />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iosRoundedBlue: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
    backgroundColor: ConstantColors.iosBlue,
  },
  iosRoundedBlueText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

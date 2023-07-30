import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FC } from "react";
import { Pressable } from "react-native";

type IconButtonsProps = {
  name: IconProp;
  onPress?: Press;
};

export const IconButton: FC<IconButtonsProps> = (props) => {
  const colorScheme = useThemeColor("tabIconDefault");
  return (
    <Pressable onPress={props.onPress}>
      <FontAwesomeIcon
        icon={props.name}
        size={25}
        color={colorScheme}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

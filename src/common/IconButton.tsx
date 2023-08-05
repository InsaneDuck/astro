import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

type IconButtonsProps = {
  name: IconProp;
  size?: number;
  onPress?: Press;
};

export const IconButton: FC<IconButtonsProps> = (props) => {
  const colorScheme = useThemeColor("tabIconDefault");
  const { name, size, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon
        icon={name}
        size={size ? size : 25}
        color={colorScheme}
      />
    </TouchableOpacity>
  );
};

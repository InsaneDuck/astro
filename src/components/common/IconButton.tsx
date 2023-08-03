import { Press } from "@/components/theming/Themed";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

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

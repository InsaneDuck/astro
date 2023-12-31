import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from "@fortawesome/react-native-fontawesome";
import React, { FC } from "react";

export type IconProps = {
  icon: IconProp;
  color: string;
  size?: number;
  style?: FontAwesomeIconStyle;
};
library.add(fab, fas, far);
/**
 * You can explore the built-in icon families and icons on the web at https://fontawesome.com/search?o=r&m=free
 */
export const Icon: FC<IconProps> = (props) => {
  const { icon, style, size, color, ...otherProps } = props;

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size ? size : 25}
      color={color}
      style={[style]}
      {...otherProps}
    />
  );
};

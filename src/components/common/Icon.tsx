import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FC } from "react";

type IconProps = {
  icon: IconProp;
  color: string;
};
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
library.add(fab, fas, far);
export const Icon: FC<IconProps> = (props) => {
  const { icon, color, ...otherProps } = props;
  return (
    <FontAwesomeIcon
      icon={icon}
      size={25}
      color={color}
      style={{ marginBottom: -3 }}
      {...otherProps}
    />
  );
};

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC, ReactNode } from "react";
import { StyleSheet } from "react-native";

import { ListItem } from "@/app/components/List/ListItem";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { ClickProps } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

type ListItemProps = {
  name: string;
  icon?: IconProp;
  children?: ReactNode;
} & ClickProps;

export const TextItem: FC<ListItemProps> = (props) => {
  const textColor = useThemeColor("text");

  return (
    <ListItem onPress={props.onPress}>
      <Text style={styles.text}>
        {props.icon && <Icon icon={props.icon} color={textColor} size={11} />}
        {props.name}
      </Text>
      <Icon icon="chevron-right" color={textColor} size={15} />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

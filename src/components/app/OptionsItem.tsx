import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { ClickProps } from "@/components/theming/Themed";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC, ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type OptionsItemProps = {
  title: string;
  icon?: IconProp;
  children?: ReactNode;
} & ClickProps;

export const OptionsItem: FC<OptionsItemProps> = (props) => {
  const borderColor = useThemeColor("borderColor");
  const textColor = useThemeColor("text");
  const view = useThemeColor("background");
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.touchable,
        { backgroundColor: borderColor, borderColor: view },
      ]}
    >
      <Text style={styles.text}>
        {props.icon && <Icon icon={props.icon} color={textColor} size={11} />}
        {props.title}
      </Text>
      {props.children ? (
        props.children
      ) : (
        <Icon icon={"chevron-right"} color={textColor} size={15} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  touchable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: "transparent",
  },
});

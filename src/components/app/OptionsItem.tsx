import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { ClickProps } from "@/components/theming/Themed";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type OptionsItemProps = {
  title: string;
  icon: IconProp;
} & ClickProps;

export const OptionsItem: FC<OptionsItemProps> = (props) => {
  const colorScheme = useThemeColor("borderColor");
  const textColor = useThemeColor("text");

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.touchable, { backgroundColor: colorScheme }]}
    >
      <Text style={styles.text}>
        <Icon
          icon={props.icon}
          style={styles.iconStyle}
          color={textColor}
          size={11}
        />
        {props.title}
      </Text>
      <Icon icon={"chevron-right"} color={textColor} size={15} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  iconStyle: { marginLeft: 15, marginBottom: 3 },
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

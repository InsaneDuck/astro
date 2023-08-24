import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { FormItem } from "@/app/components/Form/FormItem";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

type ListSelectProps = {
  name: string;
  onPress?: Press;
  options?: string[];
  selected: string;
  onChange?: Function;
};

export const FormSelect: FC<ListSelectProps> = (props) => {
  const { name, onPress, selected, options } = props;
  const textColor = useThemeColor("text");

  return (
    <FormItem onPress={onPress}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <View style={styles.right}>
        <Text style={styles.selected}>{selected}</Text>
        <Icon icon="chevron-right" color={textColor} size={15} />
      </View>
    </FormItem>
  );
};

const styles = StyleSheet.create({
  right: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  selected: {
    fontSize: 18,
    paddingBottom: 2,
  },
});

import { useEffect, useState } from "react";
import { ActionSheetIOS, StyleSheet, useColorScheme } from "react-native";

import { Text } from "@/common/Text";

type ActionSheetButtonProps<E, T> = {
  options: E;
  selected: T;
  onValueChange: (value: T) => void;
};
export const ActionSheetButton = <E extends object, T extends string>(
  props: ActionSheetButtonProps<E, T>,
) => {
  const { options, onValueChange } = props;

  const [selected, setSelected] = useState<T>(props.selected);
  const theme = useColorScheme() || "dark";

  useEffect(() => {
    onValueChange(selected);
  }, [selected]);

  const onPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Top of",
        options: Object.values(options),
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          const value = Object.keys(options)[buttonIndex] as T;
          setSelected(value);
        }
      },
    );
  };
  return <Text onPress={onPress}>{selected}</Text>;
};

const styles = StyleSheet.create({});

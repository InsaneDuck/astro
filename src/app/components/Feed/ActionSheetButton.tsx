import { useEffect, useState } from "react";
import { ActionSheetIOS, useColorScheme } from "react-native";

import { Text } from "@/common/Text";
import { ConstantColors } from "@/theming/Colors";

type ActionSheetButtonProps<E, T> = {
  title: string;
  options: E;
  selected: T;
  onValueChange: (value: T) => void;
  triggerOnMount?: boolean;
};
export const ActionSheetButton = <E extends object, T extends string>(
  props: ActionSheetButtonProps<E, T>,
) => {
  const { options, onValueChange } = props;

  const [selected, setSelected] = useState<T>(props.selected);
  const theme = useColorScheme() || "dark";

  useEffect(() => {
    if (props.triggerOnMount) {
      onPress();
    }
  }, []);

  useEffect(() => {
    onValueChange(selected);
  }, [selected]);

  const onPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: props.title,
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
  return (
    <Text
      onPress={onPress}
      style={{ fontSize: 18, color: ConstantColors.iosBlue }}
    >
      {selected}
    </Text>
  );
};

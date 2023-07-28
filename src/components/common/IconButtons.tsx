import Colors from "@/theming/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { FC } from "react";
import { Pressable, useColorScheme } from "react-native";

type IconButtonsProps = {};

export const IconButtons: FC<IconButtonsProps> = () => {
  const colorScheme = useColorScheme();
  return (
    <Pressable>
      {({ pressed }) => (
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors[colorScheme ?? "light"].text}
          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
        />
      )}
    </Pressable>
  );
};

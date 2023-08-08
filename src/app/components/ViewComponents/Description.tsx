import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { useThemeColor } from "@/theming/useThemeColor";

type DescriptionProps = {
  description: string;
};

export const Description: FC<DescriptionProps> = (props) => {
  const [expanded, setExpanded] = useState(false);
  const borderColor = useThemeColor("borderColor");
  //todo check if description is short
  return (
    <View style={{ height: "auto", width: "90%" }}>
      <TouchableOpacity
        onPress={() => setExpanded((prevState) => !prevState)}
        style={[
          { backgroundColor: borderColor, maxHeight: !expanded ? 100 : "auto" },
          styles.description,
        ]}
        activeOpacity={1}
      >
        <Text>{props.description}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    borderRadius: 13,
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
  },
});

import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type DescriptionProps = {
  description: string;
};

export const Description: FC<DescriptionProps> = (props) => {
  const [expanded, setExpanded] = useState(false);
  const borderColor = useThemeColor("borderColor");
  //todo check if description is short
  return (
    props.description && (
      <View style={{ height: !expanded ? 150 : "auto", width: "90%" }}>
        <View style={[{ backgroundColor: borderColor }, styles.description]}>
          <Text>{props.description}</Text>
        </View>
        <Text
          style={{
            right: 0,
            bottom: 0,
            position: "absolute",
            paddingRight: 10,
            color: ConstantColors.iosBlue,
          }}
          onPress={() => setExpanded((prevState) => !prevState)}
        >
          {expanded ? "Less" : "Show More"}
        </Text>
      </View>
    )
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

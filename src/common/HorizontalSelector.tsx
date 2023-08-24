import { FC, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { useThemeColor } from "@/theming/useThemeColor";

type HorizontalSelectorProps = {
  options: string[];
  selectedIndex: number;
  onValueChange: (value: string) => void;
};
export const HorizontalSelector: FC<HorizontalSelectorProps> = (props) => {
  const { options, selectedIndex, onValueChange } = props;
  const [ind, setInd] = useState<number>(selectedIndex);
  const borderColor = useThemeColor("borderColor");
  const background = useThemeColor("background");

  useEffect(() => {
    onValueChange(options[ind]);
  }, [ind]);

  const Option = ({ value, index }: { value: string; index: number }) => {
    const onPress = () => {
      setInd(index);
    };
    return (
      <Text
        style={[
          styles.text,
          {
            backgroundColor: ind === index ? background : "transparent",
          },
        ]}
        onPress={onPress}
      >
        {value}
      </Text>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: borderColor }]}>
      {options.map((option, index) => {
        return <Option key={option} value={option} index={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
    width: "90%",
  },
  text: {
    fontSize: 16,
    width: "auto",
    borderRadius: 8,
    flexGrow: 1,
    overflow: "hidden",
    padding: 5,
    textAlign: "center",
  },
});

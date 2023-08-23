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
  const width = `${100 / options.length + 1}%`;

  useEffect(() => {
    onValueChange(options[ind]);
  }, [ind]);

  const Temp = ({ option, index }: { option: string; index: number }) => {
    const onPress = () => {
      setInd(index);
    };
    return (
      <Text
        style={[
          styles.text,
          {
            width: "auto",
            backgroundColor: ind === index ? borderColor : "transparent",
          },
        ]}
        onPress={onPress}
      >
        {option}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => {
        return <Temp key={option} option={option} index={index} />;
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
    borderRadius: 5,
    flexGrow: 1,
    overflow: "hidden",
    padding: 5,
    textAlign: "center",
    width: "50%",
  },
});

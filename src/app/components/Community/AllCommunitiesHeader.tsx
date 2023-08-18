import { FC, useState } from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { useThemeColor } from "@/theming/useThemeColor";

type AllCommunitiesHeaderProps = object;
export const AllCommunitiesHeader: FC<AllCommunitiesHeaderProps> = (props) => {
  const borderColor = useThemeColor("borderColor");
  const [selected, setSelected] = useState<"all" | "subscribed">("subscribed");
  const onPressAllCommunities = () => {
    setSelected("all");
  };

  const onPressSubscribedCommunities = () => {
    setSelected("subscribed");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        width: "80%",
        borderRadius: 5,
        padding: 4,
      }}
    >
      <Text
        style={{
          width: "50%",
          backgroundColor:
            selected === "subscribed" ? borderColor : "transparent",
          textAlign: "center",
          padding: 5,
          borderRadius: 5,
          overflow: "hidden",
        }}
        onPress={onPressSubscribedCommunities}
      >
        Subscribed
      </Text>
      <Text
        style={{
          width: "50%",
          textAlign: "center",
          padding: 5,
          borderRadius: 5,
          overflow: "hidden",
          backgroundColor: selected === "all" ? borderColor : "transparent",
        }}
        onPress={onPressAllCommunities}
      >
        All
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

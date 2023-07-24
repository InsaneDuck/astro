import Swipe from "@/components/common/Swipe/Swipe";
import View, { ViewProps } from "@/components/theming/ThemedComponents/View";
import Colors from "@/constants/Colors";
import React, { FC, ReactNode } from "react";
import { StyleSheet } from "react-native";

type CardProps = {
  children?: ReactNode;
} & ViewProps;

const Card: FC<CardProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Swipe>
      <View style={styles.card} {...otherProps}>
        {children}
      </View>
    </Swipe>
  );
};

export default React.memo(Card);
//backgroundColor: "#181a1c",
const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    padding: 10,
    paddingTop: 16,
    elevation: 4,
    borderStyle: "solid",
    borderWidth: 0.75,
    borderTopColor: Colors.cardBorder,
    borderBottomColor: Colors.cardBorder,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
    marginVertical: 10,
  },
});

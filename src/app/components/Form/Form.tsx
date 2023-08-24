import React, { FC, ReactNode } from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";
import { View } from "@/common/View";

type ListProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};
export const Form: FC<ListProps> = (props) => {
  const Title = () =>
    props.title && <Text style={styles.title}>{props.title}</Text>;

  const Description = () =>
    props.description && (
      <Text style={styles.description}>{props.description}</Text>
    );

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.inner}>{props.children}</View>
      <Description />
    </View>
  );
};

const styles = StyleSheet.create({
  inner: {
    borderRadius: 13,
    overflow: "hidden",
    width: "100%",
  },
  title: {
    fontSize: 15,
    width: "95%",
    marginBottom: 3,
  },
  container: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  description: {
    marginTop: 8,
    width: "95%",
  },
});

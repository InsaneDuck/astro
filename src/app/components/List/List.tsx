import React, { FC, ReactNode } from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/common/Text";
import { View } from "@/common/View";

type ListProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};
export const List: FC<ListProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      <View style={styles.inner}>{props.children}</View>
      {props.description && (
        <Text style={styles.description}>{props.description}</Text>
      )}
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

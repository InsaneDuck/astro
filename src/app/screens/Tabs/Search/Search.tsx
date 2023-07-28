import { View } from "@/components/themed-components/View";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchProps = {};

export const Search: FC<SearchProps> = () => {
  const color = useThemeColor("borderColor");
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.searchInput, { backgroundColor: color }]}
        placeholder={"Search for a User, Post or Community"}
        clearButtonMode={"always"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  searchInput: {
    fontSize: 18,
    margin: 15,
    paddingEnd: 10,
    paddingStart: 10,
    borderRadius: 5,
    height: 45,
    width: "95%",
    color: "#ccc",
  },
});

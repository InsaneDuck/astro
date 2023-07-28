import View from "@/components/theming/ThemedComponents/View";
import { useThemeColor } from "@/components/theming/UseThemeColor";
import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchProps = {};

const Search: FC<SearchProps> = (props) => {
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

export default Search;

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

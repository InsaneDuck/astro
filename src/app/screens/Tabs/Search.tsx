import View from "@/components/theming/ThemedComponents/View";
import Colors from "@/constants/Colors";
import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchProps = {};

const Search: FC<SearchProps> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
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
    margin: 15,
    paddingEnd: 10,
    paddingStart: 10,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    width: "95%",
    color: "#ccc",
  },
});

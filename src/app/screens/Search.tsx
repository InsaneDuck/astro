import Text from "@/components/theming/ThemedComponents/Text";
import View from "@/components/theming/ThemedComponents/View";
import React, { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchProps = {};

const Search: FC<SearchProps> = (props) => {
  return (
    <>
      <Text>Search</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder={"search for community"}
        />
      </View>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    height: 40,
    color: "#ccc",
  },
});

import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { OptionsItem } from "@/components/app/OptionsItem";
import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";

export const Search = () => {
  //todo show trending communities
  const color = useThemeColor("borderColor");

  const SearchInput = () => {
    return (
      <TextInput
        style={[styles.searchInput, { backgroundColor: color }]}
        placeholder="Search for a User, Post or Community"
        clearButtonMode="always"
      />
    );
  };

  const TrendingSection = () => {
    return (
      <View style={{ width: "90%", borderRadius: 13, overflow: "hidden" }}>
        <OptionsItem title="Hello" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchInput />
      <TrendingSection />
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
    borderRadius: 13,
    height: 45,
    width: "90%",
    color: "#ccc",
  },
});

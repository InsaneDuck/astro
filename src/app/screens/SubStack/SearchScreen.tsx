import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { TextItem } from "@/app/components/List/TextItem";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useThemeColor } from "@/theming/useThemeColor";

export const SearchScreen = () => {
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

  const AllCommunities = () => {
    const navigation = useNavigation<SubStackNavigation>();
    const goToALlCommunities = (): any => {
      navigation.navigate("AllCommunities");
    };
    return (
      <View style={{ width: "90%", borderRadius: 13, overflow: "hidden" }}>
        <TextItem name="All Communities" onPress={goToALlCommunities} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchInput />
      <AllCommunities />
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

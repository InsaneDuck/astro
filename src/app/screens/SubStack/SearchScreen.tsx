import React from "react";
import { StyleSheet } from "react-native";

import { AllCommunitiesButton } from "@/app/components/Search/AllCommunitiesButton";
import { Search } from "@/app/components/Search/Search";
import { View } from "@/common/View";

export const SearchScreen = () => {
  const onSelectChange = (value: string) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Search />
      <AllCommunitiesButton />
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
});

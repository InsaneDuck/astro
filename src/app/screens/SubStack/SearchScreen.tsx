import React from "react";
import { StyleSheet } from "react-native";

import { AllCommunitiesButton } from "@/app/components/Search/AllCommunitiesButton";
import { SearchInput } from "@/app/components/Search/SearchInput";
import { View } from "@/common/View";

export const SearchScreen = () => {
  const onSelectChange = (value: string) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <SearchInput />
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

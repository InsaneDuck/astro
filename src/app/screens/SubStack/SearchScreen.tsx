import { SearchType } from "lemmy-js-client";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { SearchInput } from "@/app/components/Search/SearchInput";
import { SearchResult } from "@/app/components/Search/SearchResult/SearchResult";
import { SearchTypeSelector } from "@/app/components/Search/SearchTypeSelector";
import { View } from "@/common/View";

export const SearchScreen = () => {
  const [type, setType] = useState<SearchType>("Communities");

  const [search, setSearch] = useState<string | undefined>(undefined);
  const onValueChange = (value: string) => {
    setType(value as SearchType);
  };

  return (
    <View style={styles.container}>
      <SearchTypeSelector onValueChange={onValueChange} />
      <SearchInput searchText={(value: string) => setSearch(value)} />
      {search && <SearchResult args={{ type_: type, q: search, limit: 50 }} />}
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

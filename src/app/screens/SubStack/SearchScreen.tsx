import React from "react";
import { StyleSheet } from "react-native";

import { SearchInput } from "@/app/components/Search/SearchInput";
import { SearchTypeSelector } from "@/app/components/Search/SearchTypeSelector";
import { Form } from "@/common/Form/Form";
import { FormSelectAlt } from "@/common/Form/FormSelectAlt";
import { View } from "@/common/View";

export const SearchScreen = () => {
  enum SearchType {
    Cancel = "Cancel",
    All = "All",
    Comments = "Comments",
    Posts = "Posts",
    Communities = "Communities",
    Users = "Users",
    Url = "Url",
  }

  const onValueChange = (value: string) => {
    console.log(value);
  };

  const x = (
    <FormSelectAlt
      title="Type"
      description="Select search type"
      options={SearchType}
      selected="Communities"
      onValueChange={onValueChange}
    />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
          borderWidth: 0,
          borderColor: "#ccc",
          borderRadius: 5,
        }}
      >
        <SearchTypeSelector />
      </View>
      <Form>
        <SearchInput />
      </Form>
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

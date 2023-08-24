import React from "react";
import { StyleSheet } from "react-native";

import { SearchInput } from "@/app/components/Search/SearchInput";
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
  return (
    <View style={styles.container}>
      <Form>
        <FormSelectAlt
          title="Type"
          description="Select search type"
          options={SearchType}
          selected="Communities"
          onValueChange={onValueChange}
        />
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

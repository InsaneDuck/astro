import { FC, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
} from "react-native";

import { useLazySearchQuery } from "@/store/api/search-api";
import { useThemeColor } from "@/theming/useThemeColor";

type SearchInputProps = object;
export const Search: FC<SearchInputProps> = (props) => {
  //todo show trending communities
  const color = useThemeColor("borderColor");

  const [value, setValue] = useState<string>();
  const [trigger, { data }] = useLazySearchQuery();

  useEffect(() => {
    if (value) {
      trigger({ q: value, type_: "Communities" });
    }
  }, [value]);

  useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  const onSubmit = (
    value: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    setValue(value.nativeEvent.text);
  };

  return (
    <TextInput
      style={[styles.searchInput, { backgroundColor: color }]}
      placeholder="Search for a User, Post or Community"
      clearButtonMode="always"
      value={value}
      onSubmitEditing={onSubmit}
    />
  );
};

const styles = StyleSheet.create({
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

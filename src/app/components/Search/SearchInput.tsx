import { FC, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";

import { FormInput } from "@/common/Form/FormInput";
import { useLazySearchQuery } from "@/store/api/search-api";

type SearchInputProps = object;
export const SearchInput: FC<SearchInputProps> = (props) => {
  //todo show trending communities

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
    <FormInput
      placeholder="Search for a User, Post or Community"
      clearButtonMode="always"
      value={value}
      onSubmitEditing={onSubmit}
    />
  );
};

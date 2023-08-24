import { FC, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";

import { Form } from "@/common/Form/Form";
import { FormInput } from "@/common/Form/FormInput";

type SearchInputProps = {
  searchText: (value: string) => void;
};
export const SearchInput: FC<SearchInputProps> = (props) => {
  //todo show trending communities

  const [value, setValue] = useState<string>();

  useEffect(() => {}, [value]);

  const onSubmit = (
    value: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    setValue(value.nativeEvent.text);
    props.searchText(value.nativeEvent.text);
  };

  return (
    <Form>
      <FormInput
        placeholder="Search for a User, Post or Community"
        clearButtonMode="always"
        value={value}
        onSubmitEditing={onSubmit}
      />
    </Form>
  );
};

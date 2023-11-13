import { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Form } from "@/common/Form/Form";
import { FormInput } from "@/common/Form/FormInput";

type SearchInputProps = {
  searchText: (value: string) => void;
};
export const SearchInput: FC<SearchInputProps> = (props) => {
  //todo show trending communities

  const { control, handleSubmit } = useForm();
  //todo fix this
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //props.searchText(data);
  };

  return (
    <Form>
      <FormInput
        name="search"
        placeholder="Search for a User, Post or Community"
        clearButtonMode="always"
        onSubmitEditing={handleSubmit(onSubmit)}
      />
    </Form>
  );
};

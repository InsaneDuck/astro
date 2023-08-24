import React, { FC } from "react";

import { HorizontalSelector } from "@/common/HorizontalSelector";
import { View } from "@/common/View";

type SearchTypeSelectorProps = {
  onValueChange: (value: string) => void;
};
export const SearchTypeSelector: FC<SearchTypeSelectorProps> = (props) => {
  enum SearchType {
    All = "All",
    Comments = "Comments",
    Posts = "Posts",
    Communities = "Communities",
    Users = "Users",
    Url = "Url",
  }

  const onValueChange = (value: string) => {
    props.onValueChange(value);
  };
  return (
    <View style={{ marginTop: 20 }}>
      <HorizontalSelector
        options={Object.keys(SearchType)}
        selectedIndex={1}
        onValueChange={onValueChange}
      />
    </View>
  );
};

import { FC } from "react";

import { HorizontalSelector } from "@/common/HorizontalSelector";

type SearchTypeSelectorProps = object;
export const SearchTypeSelector: FC<SearchTypeSelectorProps> = (props) => {
  enum SearchType {
    All = "All",
    Comments = "Comments",
    Posts = "Posts",
    Communities = "Communities",
    Users = "Users",
    Url = "Url",
  }

  const onValueChange = () => {};
  return (
    <HorizontalSelector
      options={Object.keys(SearchType)}
      selectedIndex={1}
      onValueChange={onValueChange}
    />
  );
};

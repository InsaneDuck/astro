import { FC } from "react";

import { HorizontalSelector } from "@/common/HorizontalSelector";

type AllCommunitiesHeaderProps = object;
export const AllCommunitiesHeader: FC<AllCommunitiesHeaderProps> = (props) => {
  const onValueChange = (value: string) => {};

  return (
    <HorizontalSelector
      options={["all", "subscribed"]}
      selectedIndex={1}
      onValueChange={onValueChange}
    />
  );
};

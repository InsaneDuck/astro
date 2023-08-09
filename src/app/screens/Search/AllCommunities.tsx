import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { CommunitySearchResultItem } from "@/app/screens/Search/CommunitySearchResultItem";
import { View } from "@/common/View";
import { useListCommunitiesQuery } from "@/store/api/communityApi";

type AllCommunitiesProps = object;

export const AllCommunities: FC<AllCommunitiesProps> = (props) => {
  const { data: communities } = useListCommunitiesQuery({
    limit: 50,
    sort: "TopAll",
  });

  const allCommunitiesItem = ({
    item,
    index,
  }: ListRenderItemInfo<EntityId>) => {
    return <CommunitySearchResultItem communityId={item} />;
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flex: 1,
      }}
    >
      {communities && (
        <FlatList
          style={{ padding: 10, width: "100%" }}
          data={communities.ids}
          renderItem={allCommunitiesItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
        />
      )}
    </View>
  );
};

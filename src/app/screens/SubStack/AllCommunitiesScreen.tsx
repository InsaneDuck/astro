import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { CommunitySearchResultItem } from "@/app/components/CommunitySearchResultItem";
import { InvertedSeparator } from "@/common/InvertedSeparator";
import { View } from "@/common/View";
import { useListCommunitiesQuery } from "@/store/api/communityApi";

type AllCommunitiesProps = object;

export const AllCommunitiesScreen: FC<AllCommunitiesProps> = (props) => {
  const { data: communities } = useListCommunitiesQuery({
    limit: 50,
    sort: "TopAll",
  });
  const allCommunitiesItem = ({
    item,
    index,
  }: ListRenderItemInfo<EntityId>) => {
    return (
      <CommunitySearchResultItem
        communityId={item}
        style={{
          borderTopStartRadius: index === 0 ? 13 : 0,
          borderTopEndRadius: index === 0 ? 13 : 0,
          marginTop: index === 0 ? 20 : 0,
        }}
      />
    );
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
          style={{
            width: "90%",
            overflow: "hidden",
          }}
          data={communities.ids}
          renderItem={allCommunitiesItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={InvertedSeparator}
        />
      )}
    </View>
  );
};

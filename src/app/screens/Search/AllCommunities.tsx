import { EntityId } from "@reduxjs/toolkit";
import React, { FC, useEffect } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CommunitySearchResultItem } from "@/app/screens/Search/CommunitySearchResultItem";
import { View } from "@/components/common/View";
import { fetchAllCommunities } from "@/store/search-slice";
import { AppDispatch, RootState } from "@/store/store";

type AllCommunitiesProps = object;

export const AllCommunities: FC<AllCommunitiesProps> = (props) => {
  const communities = useSelector(
    (state: RootState) => state.search.allCommunities,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllCommunities());
  }, [dispatch]);

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
      <FlatList
        style={{ padding: 10, width: "100%" }}
        data={communities.ids}
        renderItem={allCommunitiesItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
      />
    </View>
  );
};

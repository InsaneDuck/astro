import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { CommunitySearchResultItem } from "@/app/components/Community/CommunitySearchResultItem";
import { InvertedSeparator } from "@/common/InvertedSeparator";
import { View } from "@/common/View";
import { useListCommunitiesQuery } from "@/store/api/communityApi";

type AllCommunitiesProps = object;

export const AllCommunitiesScreen: FC<AllCommunitiesProps> = (props) => {
  const { data: communities } = useListCommunitiesQuery({
    limit: 50,
    sort: "TopAll",
  });
  //todo remove hacky way
  const communityItem = ({ item, index }: ListRenderItemInfo<EntityId>) => {
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
  const communityItemAlt = () => {};

  return (
    <View style={styles.container}>
      {communities && (
        <FlatList
          style={styles.list}
          data={communities.ids}
          renderItem={communityItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={InvertedSeparator}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  list: {
    width: "90%",
    overflow: "hidden",
  },
});

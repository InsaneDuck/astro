import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { CommunitySearchResultItem } from "@/app/components/Community/CommunitySearchResultItem";
import { InvertedSeparator } from "@/common/InvertedSeparator";
import { View } from "@/common/View";
import { useListCommunitiesQuery } from "@/store/api/community-api";

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
          marginTop: index === 0 ? 20 : 0,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "100%" }}>
        {communities && (
          <FlashList
            data={communities.ids}
            renderItem={communityItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={InvertedSeparator}
            estimatedItemSize={50}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

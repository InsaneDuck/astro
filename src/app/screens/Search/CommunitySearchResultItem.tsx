import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";

import { CommunityButton } from "@/app/components/Buttons/CommunityButton";
import { Text } from "@/common/Text";
import { useListCommunitiesQuery } from "@/store/api/communityApi";
import { useThemeColor } from "@/theming/useThemeColor";

type CommunitySearchResultItemProps = { communityId: EntityId };

export const CommunitySearchResultItem: FC<CommunitySearchResultItemProps> = (
  props,
) => {
  const { data: communityView } = useListCommunitiesQuery(
    {
      limit: 50,
      sort: "TopAll",
    },
    {
      selectFromResult: (state) => {
        const data = state.data?.entities[props.communityId];
        return { data };
      },
    },
  );

  const borderColor = useThemeColor("borderColor");
  return (
    communityView && (
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 13,
          width: "100%",
          backgroundColor: borderColor,
          padding: 15,
        }}
      >
        <CommunityButton community={communityView.community} />
        <Text>{communityView.counts.subscribers}</Text>
      </TouchableOpacity>
    )
  );
};

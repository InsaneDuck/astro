import { EntityId } from "@reduxjs/toolkit";
import { CommunityView } from "lemmy-js-client";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { CommunityButton } from "@/components/app/Buttons/CommunityButton";
import { Text } from "@/components/common/Text";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { RootState } from "@/store/store";

type CommunitySearchResultItemProps = { communityId: EntityId };

export const CommunitySearchResultItem: FC<CommunitySearchResultItemProps> = (
  props,
) => {
  const communityView = useSelector(
    (state: RootState) =>
      state.search.allCommunities.entities[props.communityId],
  );

  let temp: CommunityView;
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

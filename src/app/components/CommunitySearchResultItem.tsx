import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { CommunityButton } from "@/app/components/Buttons/CommunityButton";
import { Text } from "@/common/Text";
import { useListCommunitiesQuery } from "@/store/api/communityApi";
import { useThemeColor } from "@/theming/useThemeColor";

type CommunitySearchResultItemProps = {
  communityId: EntityId;
  style?: StyleProp<ViewStyle>;
};

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
        style={[
          styles.container,
          props.style,
          { backgroundColor: borderColor },
        ]}
      >
        <CommunityButton community={communityView.community} />
        <Text>{communityView.counts.subscribers}</Text>
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 12,
    height: 50,
  },
});

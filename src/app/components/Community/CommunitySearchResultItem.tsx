import { useNavigation } from "@react-navigation/core";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useDispatch } from "react-redux";

import { CommunityButton } from "@/app/components/Community/CommunityButton";
import { Text } from "@/common/Text";
import { aggregateHelper } from "@/helper-functions/aggregateHelper";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { useListCommunitiesQuery } from "@/store/api/communityApi";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
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

  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToCommunity = () => {
    communityView &&
      dispatch(sharedActions.setCommunity(communityView.community));
    navigation.navigate("Community");
  };

  const borderColor = useThemeColor("borderColor");
  return (
    communityView && (
      <TouchableOpacity
        style={[
          styles.container,
          props.style,
          { backgroundColor: borderColor },
        ]}
        onPress={goToCommunity}
      >
        <CommunityButton community={communityView.community} />
        <Text style={{ fontSize: 18 }}>
          {aggregateHelper(communityView.counts.subscribers)}
        </Text>
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

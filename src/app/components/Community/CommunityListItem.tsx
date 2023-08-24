import { useNavigation } from "@react-navigation/core";
import { CommunityView } from "lemmy-js-client";
import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { CommunityButton } from "@/app/components/Community/CommunityButton";
import { CommunityViewCard } from "@/app/components/Community/CommunityViewCard";
import { ListItem } from "@/app/components/List/ListItem";
import { Text } from "@/common/Text";
import { aggregateHelper } from "@/helper-functions/aggregateHelper";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";

type CommunitySearchResultItemProps = {
  communityView: CommunityView;
};

export const CommunityListItem: FC<CommunitySearchResultItemProps> = (
  props,
) => {
  const { communityView } = props;

  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToCommunity = () => {
    communityView &&
      dispatch(sharedActions.setCommunity(communityView.community));
    navigation.navigate("Community");
  };

  const Alt = () => {
    return (
      communityView && (
        <ListItem onPress={goToCommunity}>
          <CommunityButton community={communityView.community} />
          <Text style={{ fontSize: 18 }}>
            {aggregateHelper(communityView.counts.subscribers)}
          </Text>
        </ListItem>
      )
    );
  };

  return communityView && <CommunityViewCard community={communityView} />;
};

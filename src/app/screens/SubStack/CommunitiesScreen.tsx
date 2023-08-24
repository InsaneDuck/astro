import { CommunityView, ListCommunities } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { CommunityViewCard } from "@/app/components/Community/CommunityViewCard";
import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { useListCommunitiesQuery } from "@/store/api/community-api";

type CommunitiesProps = object;

export const CommunitiesScreen: FC<CommunitiesProps> = (props) => {
  const args: ListCommunities = {
    limit: 50,
    sort: "TopAll",
  };

  const Header = () => <></>;
  const communityItem = (item: CommunityView | undefined, index: number) => {
    //todo add margin on top
    return item && <CommunityViewCard community={item} />;
  };

  const entityIdExtractor = (communityView: CommunityView) => {
    return communityView.community.id.toString();
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", height: "100%" }}>
        <FetchFlashList
          ListHeaderComponent={Header}
          entityIdExtractor={entityIdExtractor}
          estimatedItemSize={100}
          renderItem={communityItem}
          useFetch={useListCommunitiesQuery}
          requestArgs={args}
        />
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

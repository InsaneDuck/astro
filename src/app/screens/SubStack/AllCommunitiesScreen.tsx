import { CommunityView, ListCommunities } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { CommunityListItem } from "@/app/components/Community/CommunityListItem";
import { FetchFlashList } from "@/common/FetchFlashList";
import { View } from "@/common/View";
import { useListCommunitiesQuery } from "@/store/api/community-api";

type AllCommunitiesProps = object;

export const AllCommunitiesScreen: FC<AllCommunitiesProps> = (props) => {
  const args: ListCommunities = {
    limit: 50,
    sort: "TopAll",
  };

  const Header = () => <></>;
  const communityItem = (item: CommunityView | undefined, index: number) => {
    //todo add margin on top
    return item && <CommunityListItem communityView={item} />;
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

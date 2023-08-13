import { Community } from "lemmy-js-client";
import moment from "moment";
import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Button } from "@/app/components/Button";
import { Avatar } from "@/app/components/Community/Avatar";
import { Banner } from "@/app/components/Community/Banner";
import { Description } from "@/app/components/Community/Description";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { getBaseDomainFromUrl } from "@/helper-functions/getBaseDomainFromUrl";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type CommunityProps = {
  community: Community;
};

/**
 * shows a community when user clicks on a community name anywhere in the app
 */
export const CommunityViewComponent: FC<CommunityProps> = (props) => {
  const { community } = props;
  const domain = getBaseDomainFromUrl(community.actor_id);
  const borderColor = useThemeColor("borderColor");
  const tabIconDefault = useThemeColor("tabIconDefault");

  //todo move create post button to top
  const CommunityActions = () => {
    return (
      <>
        <View style={styles.communityActions}>
          <Button text="SUBSCRIBE" color={ConstantColors.iosBlue} />
          <Button text="BLOCK" color={ConstantColors.iosRed} />
        </View>
      </>
    );
  };

  const CommunityInfo = () => {
    return (
      <View style={styles.communityInfo}>
        <View>
          <Text style={{ fontSize: 20 }}>!{community.name}</Text>
          <Text style={{ fontStyle: "italic" }}>@{domain}</Text>
        </View>
        <Text style={{ fontSize: 15 }}>
          Created on {moment(community.published).format("MMMM Do, YYYY")}
        </Text>
        <CommunityActions />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {community.banner && <Banner banner={community.banner} />}
        <View style={styles.communityHeader}>
          <Avatar
            avatar={community.icon}
            borderColor={borderColor}
            color={tabIconDefault}
          />
          <CommunityInfo />
        </View>
        {community.description && (
          <Description description={community.description} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  communityHeader: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 50,
  },
  communityAvatar: {
    width: 150,
    height: 150,
    borderRadius: 13,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  communityInfo: {
    paddingLeft: 18,
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  communityActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userActionsButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
  },
});

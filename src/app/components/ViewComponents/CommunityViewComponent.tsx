import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { FC, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Avatar } from "@/app/components/ViewComponents/Avatar";
import { Banner } from "@/app/components/ViewComponents/Banner";
import { Description } from "@/app/components/ViewComponents/Description";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { getBaseDomainFromUrl } from "@/helper-functions/getBaseDomainFromUrl";
import { MainStackNavigation } from "@/router/MainStackLayout";
import { RootState } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type CommunityProps = object;

/**
 * shows a community when user clicks on a community name anywhere in the app
 */
export const CommunityViewComponent: FC<CommunityProps> = (props) => {
  const community = useSelector(
    (state: RootState) => state.community.currentCommunity,
  );
  const domain = getBaseDomainFromUrl(community.actor_id);
  const navigation = useNavigation<MainStackNavigation>();
  const borderColor = useThemeColor("borderColor");
  const tabIconDefault = useThemeColor("tabIconDefault");
  useEffect(() => {
    navigation.setOptions({
      title: community.name,
      headerRight: () => <CreatePost />,
    });
  }, []);

  const CreatePost = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate("Test")}>
          <Icon icon="plus" color={tabIconDefault} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Test")}
          style={{ marginLeft: 10 }}
        >
          <Icon icon="info-circle" color={tabIconDefault} />
        </TouchableOpacity>
      </>
    );
  };

  //todo move create post button to top
  const CommunityActions = () => {
    return (
      <>
        <View style={styles.communityActions}>
          <TouchableOpacity
            style={[
              { backgroundColor: ConstantColors.iosBlue },
              styles.userActionsButton,
            ]}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
              SUBSCRIBE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { backgroundColor: ConstantColors.iosRed },
              styles.userActionsButton,
            ]}
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>BLOCK</Text>
          </TouchableOpacity>
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
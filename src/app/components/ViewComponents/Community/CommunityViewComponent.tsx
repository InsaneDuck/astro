import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { ImageEditButton } from "@/app/components/ImageEditButton";
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
  const [expanded, setExpanded] = useState(false);
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

  const CommunityBanner = () => {
    const onPress = (): any => {};
    return (
      <View
        style={{
          width: "100%",
          height: 200,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: community.banner }}
          style={{ width: "100%", height: "100%" }}
        />
        <ImageEditButton onPress={onPress} />
      </View>
    );
  };

  const CommunityAvatar = () => {
    const onPress = (): any => {};
    return (
      <View
        style={[
          styles.communityAvatar,
          {
            borderColor,
          },
        ]}
      >
        {community.icon ? (
          <Image
            source={{ uri: community.icon }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Icon icon="user" color="#ccc" size={18} />
        )}
        <ImageEditButton onPress={onPress} />
      </View>
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
  const CommunityHeader = () => {
    return (
      <View style={styles.communityHeader}>
        <CommunityAvatar />
        <CommunityInfo />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {community.banner && <CommunityBanner />}
        <CommunityHeader />
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

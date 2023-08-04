import { getBaseDomainFromUrl } from "@/api/helpers";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { ConstantColors } from "@/components/theming/Colors";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { MainStackNavigation } from "@/router/MainStackLayout";
import { RootState } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { FC, useEffect } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

type CommunityProps = {};

export const Community: FC<CommunityProps> = (props) => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Icon icon={"plus"} color={tabIconDefault} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Modal")}
          style={{ marginLeft: 10 }}
        >
          <Icon icon={"info-circle"} color={tabIconDefault} />
        </TouchableOpacity>
      </>
    );
  };

  const CommunityBanner = () => {
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
      </View>
    );
  };

  const CommunityAvatar = () => {
    return (
      <View
        style={[
          styles.communityAvatar,
          {
            borderColor: borderColor,
          },
        ]}
      >
        {community.icon ? (
          <Image
            source={{ uri: community.icon }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Icon icon={"user"} color={"#ccc"} size={18} />
        )}
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
            <Text style={{ fontSize: 18 }}>Subscribe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              { backgroundColor: ConstantColors.iosRed },
              styles.userActionsButton,
            ]}
          >
            <Text style={{ fontSize: 18 }}>Block</Text>
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

  const Description = () => {
    return (
      community.description && (
        <View style={[{ backgroundColor: borderColor }, styles.description]}>
          <Text>{community.description}</Text>
        </View>
      )
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {community.banner && <CommunityBanner />}
        <CommunityHeader />
        <Description />
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
  description: {
    width: "90%",
    borderRadius: 13,
    marginTop: 20,
    padding: 15,
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

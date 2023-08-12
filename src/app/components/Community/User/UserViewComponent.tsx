import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { FC, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Avatar } from "@/app/components/Community/Avatar";
import { Banner } from "@/app/components/Community/Banner";
import { Description } from "@/app/components/Community/Description";
import { ListItem } from "@/app/components/ListItem";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { getBaseDomainFromUrl } from "@/helper-functions/getBaseDomainFromUrl";
import { RootState } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type UserViewComponentProps = {
  userType: "primary" | "clicked";
};

export const UserViewComponent: FC<UserViewComponentProps> = (props) => {
  const { userType } = props;
  const user = useSelector((state: RootState) => state.shared.clickedPerson);
  const domain = getBaseDomainFromUrl(user.actor_id);
  const tabIconDefault = useThemeColor("tabIconDefault");
  const borderColor = useThemeColor("borderColor");
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: user.display_name ? user.display_name : user.name,
    });
  }, []);

  const UserDisplayName = () => {
    return (
      <Text style={{ fontSize: 28, marginTop: 20, width: "88%" }}>
        {user.display_name ? user.display_name : user.name}
      </Text>
    );
  };

  const UserInfo = () => {
    return (
      <View style={styles.userInfo}>
        <View>
          <Text style={{ fontSize: 20 }}>@{user.name}</Text>
          <Text style={{ fontStyle: "italic" }}>@{domain}</Text>
        </View>
        <Text style={{ fontSize: 15 }}>
          Joined {moment(user.published).fromNow()}
        </Text>
        <Text style={{ fontSize: 15 }}>
          <Icon
            icon="cake"
            color="#ccc"
            size={14}
            style={{ marginRight: 10 }}
          />
          {moment(user.published).format("MMMM Do, YYYY")}
        </Text>
        {userType === "clicked" && <UserActions />}
      </View>
    );
  };
  const UserActions = () => {
    return (
      <View style={styles.userActions}>
        <TouchableOpacity
          style={[
            { backgroundColor: ConstantColors.iosBlue },
            styles.userActionsButton,
          ]}
        >
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>MESSAGE</Text>
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
    );
  };

  const UserFooter = () => {
    return (
      <View style={styles.userFooter}>
        <ListItem title="Overview" />
        <ListItem title="Comments" />
        <ListItem title="Posts" />
        {userType === "primary" && <ListItem title="Saved" />}
      </View>
    );
  };
  //todo fix scrollview
  return (
    user && (
      <ScrollView>
        <View style={styles.container}>
          {user.banner && <Banner banner={user.banner} />}
          <UserDisplayName />
          <View style={styles.userHeader}>
            <Avatar
              borderColor={borderColor}
              avatar={user.avatar}
              color={tabIconDefault}
            />
            <UserInfo />
          </View>
          {user.bio && <Description description={user.bio} />}
          <UserFooter />
        </View>
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  userHeader: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
  },
  userActionsButton: {
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
  },
  description: {
    width: "90%",
    borderRadius: 13,
    marginTop: 20,
    padding: 15,
  },
  userFooter: {
    marginTop: 20,
    width: "90%",
    borderRadius: 13,
    overflow: "hidden",
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingBottom: 50,
  },
  userActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    paddingLeft: 18,
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  userAvatar: {
    width: 150,
    height: 150,
    borderRadius: 13,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

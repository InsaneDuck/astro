import { getBaseDomainFromUrl } from "@/api/get";
import { OptionsItem } from "@/components/app/OptionsItem";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { ConstantColors } from "@/components/theming/Colors";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { RootState } from "@/store/store";
import moment from "moment";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

type UserViewComponentProps = {};

export const UserViewComponent: FC<UserViewComponentProps> = (props) => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  let domain = getBaseDomainFromUrl(user.actor_id);
  const tabIconDefault = useThemeColor("tabIconDefault");
  const borderColor = useThemeColor("borderColor");
  const size = 150;

  const DisplayName = () => {
    return (
      <Text style={{ fontSize: 30, marginTop: 20, width: "88%" }}>
        {user.display_name ? user.display_name : user.name}
      </Text>
    );
  };
  const UserBanner = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "30%",
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: user.banner }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  };
  const UserAvatar = () => {
    return (
      <View style={styles.userAvatar}>
        {user?.avatar ? (
          <Image
            source={{ uri: user.avatar }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Icon icon={"user"} color={tabIconDefault} size={75} />
        )}
      </View>
    );
  };

  const UserInfo = () => {
    return (
      <View style={styles.userInfo}>
        <Text style={{ fontSize: 20 }}>@{user.name}</Text>
        <Text style={{ fontStyle: "italic" }}>@{domain}</Text>
        <Text style={{ fontSize: 15 }}>
          Joined {moment(user.published).fromNow()}
        </Text>
        <Text style={{ fontSize: 15 }}>
          <Icon
            icon={"cake"}
            color={"#ccc"}
            size={14}
            style={{ marginRight: 10, marginBottom: 1 }}
          />
          {moment(user.published).format("MMMM Do, YYYY")}
        </Text>
        <UserActions />
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
          <Text style={{ fontSize: 18 }}>Message</Text>
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
    );
  };
  const UserHeader = () => {
    return (
      <View style={styles.userHeader}>
        <UserAvatar />
        <UserInfo />
      </View>
    );
  };

  const Description = () => {
    return (
      user.bio && (
        <View style={[{ backgroundColor: borderColor }, styles.description]}>
          <Text>{user.bio}</Text>
        </View>
      )
    );
  };

  const UserFooter = () => {
    return (
      <View style={styles.userFooter}>
        <OptionsItem title={"Overview"} />
        <OptionsItem title={"Comments"} />
        <OptionsItem title={"Posts"} />
        <OptionsItem title={"Saved"} />
      </View>
    );
  };

  return (
    user && (
      <View style={styles.container}>
        {user.banner && <UserBanner />}
        <DisplayName />
        <UserHeader />
        <Description />
        <UserFooter />
      </View>
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
    justifyContent: "center",
    width: "100%",
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

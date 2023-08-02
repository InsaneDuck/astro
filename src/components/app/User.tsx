import { getBaseDomainFromUrl } from "@/api/get";
import { OptionsItem } from "@/components/app/OptionsItem";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { RootState } from "@/store/store";
import moment from "moment";
import React, { FC } from "react";
import { Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

type UserProps = {};

export const User: FC<UserProps> = (props) => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  let domain = getBaseDomainFromUrl(user.actor_id);
  const tabIconDefault = useThemeColor("tabIconDefault");
  const borderColor = useThemeColor("borderColor");
  const size = 150;
  const UserBanner = () => {
    return (
      user.banner && (
        <View>
          <Image source={{ uri: user.banner }} />
        </View>
      )
    );
  };
  const UserAvatar = () => {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: 13,
          borderWidth: 1,
          borderColor: borderColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
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

  const UserName = () => {
    return (
      <View style={{ paddingLeft: 18 }}>
        {user.display_name && (
          <Text style={{ fontSize: 23, marginBottom: 5 }}>
            {user.display_name}
          </Text>
        )}
        <Text style={{ fontSize: 20, marginBottom: 5 }}>@{user.name}</Text>
        <Text style={{ fontStyle: "italic", marginBottom: 5 }}>@{domain}</Text>
        <Text style={{ fontSize: 15, marginBottom: 5 }}>
          Joined {moment(user.published).fromNow()}
        </Text>
        <Text style={{ fontSize: 15, marginBottom: 5 }}>
          <Icon
            icon={"cake"}
            color={"#ccc"}
            size={16}
            style={{ marginLeft: 5 }}
          />
          {moment(user.published).format("MMMM Do, YYYY")}
        </Text>
        <UserActions />
      </View>
    );
  };
  const UserActions = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 30 }}>
          <Text style={{ fontSize: 18 }}>Block</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const UserHeader = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          marginTop: 20,
        }}
      >
        <UserAvatar />
        <UserName />
      </View>
    );
  };

  const Description = () => {
    return (
      user.bio && (
        <View style={{ width: "90%", marginTop: 20 }}>
          <Text>{user.bio}</Text>
        </View>
      )
    );
  };

  const UserFooter = () => {
    return (
      <View
        style={{
          marginTop: 20,
          width: "90%",
          borderRadius: 13,
          overflow: "hidden",
        }}
      >
        <OptionsItem title={"Overview"} icon={"info-circle"} />
        <OptionsItem title={"Posts"} icon={"info-circle"} />
        <OptionsItem title={"Comments"} icon={"info-circle"} />
      </View>
    );
  };

  return (
    user && (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <UserBanner />
        <UserHeader />
        <Description />
        <UserFooter />
      </View>
    )
  );
};

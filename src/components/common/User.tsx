import { SettingsItem } from "@/app/screens/Tabs/Settings/SettingsItem";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { RootState } from "@/store/store";
import { useThemeColor } from "@/theming/useThemeColor";
import React, { FC } from "react";
import { Image } from "react-native";
import { useSelector } from "react-redux";

type UserProps = {};

export const User: FC<UserProps> = (props) => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const tabIconDefault = useThemeColor("tabIconDefault");
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 30,
          }}
        >
          {user.avatar ? (
            <Image
              source={{ uri: user.avatar }}
              style={{ width: 100, height: 100, borderRadius: 13 }}
            />
          ) : (
            <Icon icon={"user"} color={tabIconDefault} size={100} />
          )}
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.name}</Text>
        </View>
        <View style={{ width: "90%", borderRadius: 13, overflow: "hidden" }}>
          <SettingsItem title={"Overview"} icon={"info-circle"} />
          <SettingsItem title={"Posts"} icon={"info-circle"} />
          <SettingsItem title={"Comments"} icon={"info-circle"} />
        </View>
      </View>
    )
  );
};

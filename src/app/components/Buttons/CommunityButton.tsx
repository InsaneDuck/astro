import { useNavigation } from "@react-navigation/core";
import { Community, SubscribedType } from "lemmy-js-client";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { CustomImage } from "@/common/CustomImage";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type CommunityButtonProps = {
  community: Community;
  subscribed?: SubscribedType;
};

export const CommunityButton: FC<CommunityButtonProps> = (props) => {
  const [actionText, setActionText] = useState("Sub");
  const { community } = props;
  const borderColor = useThemeColor("borderColor");
  const tabIconDefault = useThemeColor("tabIconDefault");
  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToCommunity = (): any => {
    dispatch(sharedActions.setCommunity(community));
    navigation.navigate("Community");
  };
  const onPress = (): any => {
    //todo add sub api
    setActionText((text) => (text === "Undo" ? "Sub" : "Undo"));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToCommunity} style={styles.community}>
        <View style={styles.imageContainer}>
          {community.icon ? (
            <CustomImage
              source={{ uri: community.icon }}
              style={styles.image}
            />
          ) : (
            <Icon icon="users" color={tabIconDefault} size={12} />
          )}
        </View>

        <Text
          style={[
            {
              color: ConstantColors.communityColor,
            },
            styles.communityName,
          ]}
        >
          {community.name}
        </Text>
      </TouchableOpacity>
      {!props.subscribed && (
        <Text style={styles.actionButton} onPress={onPress}>
          {actionText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  community: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 20,
    height: 20,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  communityName: {
    fontSize: 18,
    paddingLeft: 3,
  },
  actionButton: {
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: ConstantColors.iosBlue,
    borderRadius: 10,
    overflow: "hidden",
    paddingRight: 6,
    paddingLeft: 6,
    marginLeft: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { useNavigation } from "@react-navigation/core";
import { Community, SubscribedType } from "lemmy-js-client";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { CustomImage } from "@/common/CustomImage";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { useAppDispatch } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";

type CommunityButtonProps = {
  community: Community;
  subscribed?: SubscribedType;
};

export const CommunityButton: FC<CommunityButtonProps> = (props) => {
  const { community } = props;

  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useAppDispatch();
  const goToCommunity = () => {
    dispatch(sharedActions.setCommunity(community));
    navigation.navigate("Community");
  };

  const CommunityName = () => {
    return (
      <Text
        style={[
          {
            color: ConstantColors.lemmyGreen,
          },
        ]}
      >
        {community.name}
      </Text>
    );
  };

  const SubscribeButton = () => {
    const [actionText, setActionText] = useState<"SUB" | "UNDO">("SUB");
    const onPressSubscribe = (): any => {
      //todo add sub api
      setActionText((text) => (text === "UNDO" ? "SUB" : "UNDO"));
    };
    return (
      !props.subscribed && (
        <Text style={styles.actionButton} onPress={onPressSubscribe}>
          {actionText}
        </Text>
      )
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToCommunity} style={styles.community}>
        {community.icon && (
          <View style={styles.imageContainer}>
            <CustomImage
              source={{ uri: community.icon }}
              style={styles.image}
            />
          </View>
        )}
        <CommunityName />
      </TouchableOpacity>
      <SubscribeButton />
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
    marginRight: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  actionButton: {
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: ConstantColors.iosBlue,
    borderRadius: 8,
    overflow: "hidden",
    paddingRight: 6,
    paddingLeft: 6,
    marginLeft: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

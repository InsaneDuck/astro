import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { ConstantColors } from "@/components/theming/Colors";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { FeedStackNavigation } from "@/router/tabs/FeedStackLayout";
import { communityActions } from "@/store/community-slice";
import { AppDispatch } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import { Community } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

type CommunityButtonProps = {
  community: Community;
};

export const CommunityButton: FC<CommunityButtonProps> = (props) => {
  const { community } = props;
  const textColor = useThemeColor("text");
  const tabIconDefault = useThemeColor("tabIconDefault");
  const navigation = useNavigation<FeedStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToCommunity = (): any => {
    dispatch(communityActions.setCommunity(community));
    navigation.navigate("Community");
  };
  return (
    <TouchableOpacity onPress={goToCommunity} style={styles.container}>
      <View style={styles.imageContainer}>
        {community.icon ? (
          <Image source={{ uri: community.icon }} style={styles.image} />
        ) : (
          <Icon
            icon={"user"}
            color={tabIconDefault}
            size={18}
            style={styles.image}
          />
        )}
      </View>

      <Text
        style={{
          fontSize: 18,
          paddingLeft: 3,
          color: ConstantColors.communityColor,
        }}
      >
        {community.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 20,
    height: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

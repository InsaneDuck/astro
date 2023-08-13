import { useNavigation } from "@react-navigation/core";
import { CommunityView } from "lemmy-js-client";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { Button } from "@/app/components/Button";
import { CustomImage } from "@/common/CustomImage";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { getBaseDomainFromUrl } from "@/helper-functions/getBaseDomainFromUrl";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";

type CommunityViewCardProps = {
  community: CommunityView;
};
export const CommunityViewCard: FC<CommunityViewCardProps> = (props) => {
  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToCommunity = () => {
    dispatch(sharedActions.setCommunity(props.community.community));
    navigation.navigate("Community");
  };
  return (
    <View style={styles.container}>
      {props.community.community.banner && (
        <CustomImage
          source={{ uri: props.community.community.banner }}
          resizeMode="cover"
          style={styles.banner}
          onPress={goToCommunity}
        />
      )}
      <View style={styles.footer}>
        <View style={{ backgroundColor: "transparent" }}>
          <Text style={styles.communityName}>
            {props.community.community.name}
          </Text>
          <Text style={{ color: "#ffffff" }}>
            @{getBaseDomainFromUrl(props.community.community.actor_id)}
          </Text>
        </View>
        <Button text="SUBSCRIBE" color={ConstantColors.iosBlue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 13,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00000030",
    padding: 8,
    width: "100%",
  },
  communityName: {
    fontSize: 20,
    color: "#ffffff",
  },
});

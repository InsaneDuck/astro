import { useNavigation } from "@react-navigation/core";
import { CommunityView } from "lemmy-js-client";
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Button } from "@/app/components/Button";
import { CustomImage } from "@/common/CustomImage";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { aggregateHelper } from "@/helper-functions/aggregateHelper";
import { getBaseDomainFromUrl } from "@/helper-functions/getBaseDomainFromUrl";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type CommunityViewCardProps = {
  community: CommunityView;
};
export const CommunityViewCard: FC<CommunityViewCardProps> = (props) => {
  const borderColor = useThemeColor("borderColor");
  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToCommunity = () => {
    dispatch(sharedActions.setCommunity(props.community.community));
    navigation.navigate("Community");
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <CustomImage
            source={{ uri: props.community.community.icon }}
            style={styles.icon}
          />
          <View
            style={{
              backgroundColor: "transparent",
              marginLeft: 5,
            }}
          >
            <Text style={styles.communityName}>
              {props.community.community.name}
            </Text>
            <Text style={{ color: "#ffffff", marginBottom: 1 }}>
              @{getBaseDomainFromUrl(props.community.community.actor_id)}
            </Text>
          </View>
        </View>

        <Button text="SUBSCRIBE" color={ConstantColors.iosBlue} />
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={goToCommunity}
      style={[styles.container, { borderColor }]}
    >
      {props.community.community.banner ? (
        <CustomImage
          source={{ uri: props.community.community.banner }}
          resizeMode="cover"
          style={styles.banner}
          onPress={goToCommunity}
        />
      ) : (
        <View style={styles.noBannerText}>
          <Text style={{ fontSize: 30 }}>No Banner</Text>
        </View>
      )}
      <Footer />
      <Text style={styles.subscribers}>
        {aggregateHelper(props.community.counts.subscribers)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 13,
    overflow: "hidden",
    borderWidth: 1,
    marginTop: 20,
  },
  banner: {
    width: "100%",
    height: 200,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00000030",
    padding: 5,
    paddingRight: 15,
    paddingLeft: 15,
    width: "100%",
  },
  footerLeft: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  communityName: {
    fontSize: 20,
    color: "#ffffff",
  },
  noBannerText: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subscribers: {
    top: 0,
    right: 0,
    position: "absolute",
    margin: 10,
    padding: 5,
    backgroundColor: "#00000030",
    borderRadius: 5,
    overflow: "hidden",
  },
});

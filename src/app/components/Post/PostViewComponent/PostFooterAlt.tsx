import { Community, Person, PostAggregates } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { CommunityButton } from "@/app/components/Community/CommunityButton";
import { PersonButton } from "@/app/components/Person/PersonButton";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { formatTimeToDuration } from "@/helper-functions/formatTimeToDuration";
import { Press } from "@/theming/Themed";
import { useThemeColor } from "@/theming/useThemeColor";

type PostFooterAltProps = {
  onPress: Press;
  community: Community;
  creator: Person;
  aggregate: PostAggregates;
  published: string;
};
export const PostFooterAlt: FC<PostFooterAltProps> = (props) => {
  const tabIconDefault = useThemeColor("tabIconDefault");

  const Top = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18 }}>In </Text>
          <CommunityButton community={props.community} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon icon="message" color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18, marginLeft: 3, marginRight: 3 }}>
            {props.aggregate.comments}
          </Text>
          <Icon icon="clock" color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18, marginLeft: 3 }}>
            {formatTimeToDuration(props.published)}
          </Text>
        </View>
      </View>
    );
  };

  const Bottom = () => {
    return (
      <View style={styles.containerBottom}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18 }}>By </Text>
          <PersonButton person={props.creator} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon icon="arrow-up" color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18 }}>{props.aggregate.score}</Text>
          <Icon icon="arrow-down" color={tabIconDefault} size={16} />
          <Icon icon="ellipsis" color={tabIconDefault} size={16} />
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={props.onPress} style={{ padding: 12 }}>
      <Top />
      <Bottom />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

import Card from "@/components/common/Cards/Card";
import Image from "@/components/theming/ThemedComponents/Image";

import Text from "@/components/theming/ThemedComponents/Text";
import View from "@/components/theming/ThemedComponents/View";
import { NavigationRoutes, StackNavigation } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { Optional } from "@/types/Optional";
import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC, ReactNode, useState } from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

type FeedCardProps = {
  children?: ReactNode;
  post: Optional<PostView>;
};

const FeedCard: FC<FeedCardProps> = (props) => {
  const [postView, setPostView] = useState<Optional<PostView>>(props.post);
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch();

  const pressHandler = (event: GestureResponderEvent) => {
    dispatch(feedActions.setCurrentPost(postView));
    navigation.navigate(NavigationRoutes.Post);
  };

  return (
    <Card>
      {postView.post?.name && (
        <Text
          onPress={pressHandler}
          style={{ fontWeight: "bold", fontSize: 18 }}
        >
          {postView.post.name}
        </Text>
      )}

      {postView.post?.thumbnail_url && (
        <Image source={{ uri: postView.post?.thumbnail_url }} />
      )}
      <View style={styles.footer}>
        {postView.creator?.name && (
          <Text style={{ fontSize: 14 }}>by {postView.creator.name}</Text>
        )}
        {postView.community?.name && (
          <Text style={{ fontSize: 14 }}>in {postView.community.name}</Text>
        )}
      </View>
    </Card>
  );
};

export default FeedCard;
const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

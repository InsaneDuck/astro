import Card from "@/components/common/Cards/Card";
import Image from "@/components/theming/ThemedComponents/Image";
import Text from "@/components/theming/ThemedComponents/Text";
import { NavigationRoutes, StackNavigation } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { Optional } from "@/types/Optional";
import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC, ReactNode, useState } from "react";
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";

type FeedCardProps = {
  children?: ReactNode;
  post: Optional<PostView>;
};

const FeedCard: FC<FeedCardProps> = (props) => {
  const [postView, setPostView] = useState<Optional<PostView>>(props.post);
  const [imageHeight, setImageHeight] = useState<number>(100);
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch();
  const handleImageLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.y;
    setImageHeight(height);
  };

  const pressHandler = (event: GestureResponderEvent) => {
    dispatch(feedActions.setCurrentPost(postView));
    navigation.navigate(NavigationRoutes.Post);
  };

  return (
    <Card>
      {postView.post?.embed_title && (
        <Text
          onPress={pressHandler}
          style={{ fontWeight: "bold", fontSize: 18 }}
        >
          {postView.post.embed_title}
        </Text>
      )}

      {postView.post?.thumbnail_url && (
        <Image
          source={{ uri: postView.post?.thumbnail_url }}
          style={[styles.image, { height: undefined }]}
          resizeMode="contain"
          resizeMethod={"auto"}
          onLayout={handleImageLayout}
        />
      )}

      {postView.post?.embed_description && (
        <Text>{postView.post.embed_description}</Text>
      )}
    </Card>
  );
};

export default FeedCard;
const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    width: "100%",
    marginVertical: 10,
  },
});

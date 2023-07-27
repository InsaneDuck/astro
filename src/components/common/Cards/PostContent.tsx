import Image from "@/components/theming/ThemedComponents/Image";
import Text from "@/components/theming/ThemedComponents/Text";
import View from "@/components/theming/ThemedComponents/View";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";

type PostContentProps = {
  post: PostView;
  onTitlePress?: ((event: GestureResponderEvent) => void) | undefined;
};

const PostContent: FC<PostContentProps> = (props) => {
  const { post } = props;
  return post ? (
    <>
      {post.post?.name && (
        <Text
          onPress={props.onTitlePress}
          style={{ fontWeight: "bold", fontSize: 18 }}
        >
          {post.post?.name}
        </Text>
      )}
      {post.post?.thumbnail_url && (
        <Image source={{ uri: post.post.thumbnail_url }} />
      )}
      <View style={styles.footer}>
        {post.creator.name && (
          <Text style={{ fontSize: 14 }}>by {post.creator.name}</Text>
        )}
        <Text style={{ fontSize: 14 }}>in {post.community.name}</Text>
      </View>
    </>
  ) : null;
};

export default PostContent;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

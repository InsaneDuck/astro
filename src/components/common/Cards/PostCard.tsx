import Card from "@/components/common/Cards/Card";
import Image from "@/components/theming/ThemedComponents/Image";
import Text from "@/components/theming/ThemedComponents/Text";
import { RootState } from "@/store/store";
import React, { FC, useState } from "react";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

type PostCardProps = {};

const PostCard: FC<PostCardProps> = (props) => {
  const post = useSelector((state: RootState) => state.feed.currentPost);
  const [imageHeight, setImageHeight] = useState<number>(100);
  const handleImageLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.y;
    setImageHeight(height);
  };
  return (
    <Card>
      {post?.post?.embed_title && (
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {post.post.embed_title}
        </Text>
      )}

      {post?.post?.thumbnail_url && (
        <Image
          source={{ uri: post.post?.thumbnail_url }}
          style={[styles.image, { height: undefined }]}
          resizeMode="contain"
          resizeMethod={"auto"}
          onLayout={handleImageLayout}
        />
      )}

      {post?.post?.embed_description && (
        <Text>{post.post.embed_description}</Text>
      )}
    </Card>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    width: "100%",
    marginVertical: 10,
  },
});

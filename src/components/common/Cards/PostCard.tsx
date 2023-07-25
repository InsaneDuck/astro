import Card from "@/components/common/Cards/Card";
import Image from "@/components/theming/ThemedComponents/Image";
import Text from "@/components/theming/ThemedComponents/Text";
import View from "@/components/theming/ThemedComponents/View";
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
      {post?.post?.name && (
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {post.post.name}
        </Text>
      )}

      {post?.post?.thumbnail_url && (
        <Image source={{ uri: post.post?.thumbnail_url }} />
      )}
      <View style={styles.footer}>
        {post?.creator?.name && (
          <Text style={{ fontSize: 14 }}>by {post.creator.name}</Text>
        )}
        {post?.community?.name && (
          <Text style={{ fontSize: 14 }}>in {post.community.name}</Text>
        )}
      </View>
    </Card>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

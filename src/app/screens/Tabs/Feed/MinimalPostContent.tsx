import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { NavigationRoutes, StackNavigation } from "@/constants/Navigation";
import { imageActions } from "@/store/image-slice";
import { AppDispatch } from "@/store/store";
import { Press } from "@/theming/Themed";
import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

type MinimalPostContentProps = {
  postView: PostView;
  onTitlePress?: Press;
  onImagePress?: Press;
};
const propsAreEqual = (
  previousProps: MinimalPostContentProps,
  currentProps: MinimalPostContentProps,
) => {
  return previousProps.postView.post.id == currentProps.postView.post.id;
};
let count = 0;
export const MinimalPostContent: FC<MinimalPostContentProps> = React.memo(
  (props) => {
    const { postView } = props;
    const navigation = useNavigation<StackNavigation>();
    const dispatch = useDispatch<AppDispatch>();
    const onImagePress = (): any => {
      if (postView.post?.thumbnail_url) {
        dispatch(
          imageActions.addImage({ image: [postView.post.thumbnail_url] }),
        );
        navigation.navigate(NavigationRoutes.ImageViewer);
      }
    };
    //console.log("Rendering Post Content, count = ", ++count);
    //todo fix imag
    return postView ? (
      <>
        <Text onPress={props.onTitlePress} style={styles.title}>
          {postView.post.name}
        </Text>
        {postView.post?.thumbnail_url && (
          <Pressable onPress={onImagePress}>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: postView.post.thumbnail_url }}
            />
          </Pressable>
        )}
        {postView.post.embed_description && (
          <Text
            style={{
              fontSize: 16,
              paddingRight: 10,
              paddingLeft: 10,
              paddingTop: 10,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {postView.post.embed_description}
          </Text>
        )}
        <View style={styles.footer}>
          <Text style={styles.details}>in {postView.community.name}</Text>
          <Text style={styles.details}>by {postView.creator.name}</Text>
        </View>
      </>
    ) : null;
  },
  propsAreEqual,
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  details: {
    fontSize: 18,
  },
  footer: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

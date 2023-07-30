import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { MainNavigation, MainRoutes } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { imageActions } from "@/store/image-slice";
import { AppDispatch } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";

type PostViewComponentProps = {
  postView: PostView;
  type: "feed" | "post";
};
const propsAreEqual = (
  previousProps: PostViewComponentProps,
  currentProps: PostViewComponentProps,
) => {
  return previousProps.postView.post.id == currentProps.postView.post.id;
};
/**
 *
 */
export const PostViewComponent: FC<PostViewComponentProps> = React.memo(
  (props) => {
    const { postView, type } = props;
    const navigation = useNavigation<MainNavigation>();
    const dispatch = useDispatch<AppDispatch>();
    const onImagePress = (): any => {
      if (postView.post?.thumbnail_url) {
        dispatch(
          imageActions.addImage({ image: [postView.post.thumbnail_url] }),
        );
        navigation.navigate(MainRoutes.ImageViewer);
      }
    };

    const onTitlePress = (): any => {
      if (type === "feed") {
        postView && dispatch(feedActions.setCurrentPost(postView.post.id));
        navigation.navigate(MainRoutes.Post);
      }
    };

    //todo change shade of title after post is marked as read
    const PostTitle = () => {
      return (
        <Text
          onPress={onTitlePress}
          style={{
            fontWeight: "bold",
            fontSize: 18,
            padding: 10,
          }}
        >
          {postView.post.name}
        </Text>
      );
    };
    //todo fix image dimensions
    const PostImage = () => {
      return (
        postView.post?.thumbnail_url && (
          <Pressable onPress={onImagePress}>
            <Image
              style={{ width: "100%", height: 200 }}
              source={{ uri: postView.post.thumbnail_url }}
            />
          </Pressable>
        )
      );
    };

    //todo show any embed url
    const PostEmbedDescription = () => {
      return (
        postView.post.embed_description && (
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
        )
      );
    };
    //todo add markdown rendering
    //todo add function to detect image links to show in ImageViewer
    const PostBody = () => {
      return (
        postView.post.body && (
          <Text
            style={{
              padding: 10,
              fontSize: 16,
            }}
          >
            {postView.post.body}
          </Text>
        )
      );
    };

    const PostFooter = () => {
      return (
        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            in {postView.community.name}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            by {postView.creator.name}
          </Text>
        </View>
      );
    };
    //todo show skeleton instead of null
    return postView ? (
      <>
        <PostTitle />
        <PostImage />
        <PostEmbedDescription />
        {type === "post" && <PostBody />}
        <PostFooter />
      </>
    ) : null;
  },
  propsAreEqual,
);

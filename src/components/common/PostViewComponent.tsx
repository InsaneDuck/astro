import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { View } from "@/components/themed-components/View";
import { MainNavigation, MainRoutes } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { imageActions } from "@/store/image-slice";
import { AppDispatch } from "@/store/store";
import { useThemeColor } from "@/theming/useThemeColor";
import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC, useCallback } from "react";
import { Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

type PostViewComponentProps = {
  postView: PostView;
  type: "feed" | "post";
};
const propsAreEqual = (
  previousProps: PostViewComponentProps,
  currentProps: PostViewComponentProps,
) => {
  return previousProps.postView.post.id === currentProps.postView.post.id;
};
/**
 *
 */
export const PostViewComponent: FC<PostViewComponentProps> = React.memo(
  (props) => {
    const { postView, type } = props;
    const borderColor = useThemeColor("borderColor");
    const textColor = useThemeColor("text");
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

    const onTitlePress = useCallback((): any => {
      if (type === "feed") {
        postView && dispatch(feedActions.setCurrentPost(postView.post.id));
        navigation.navigate(MainRoutes.Post);
      }
    }, [type, postView, dispatch, navigation]);

    //todo change shade of title after post is marked as read
    const PostTitle = () => {
      return (
        <Text onPress={onTitlePress} style={styles.postTitle}>
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
              style={{ width: "100%" }}
              height={300}
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
          <Text style={styles.postEmbedDescription}>
            {postView.post.embed_description}
          </Text>
        )
      );
    };
    //todo add markdown rendering
    //todo add function to detect image links to show in ImageViewer
    const PostBody = () => {
      return type !== "post" ? (
        <></>
      ) : (
        postView.post.body && (
          <Text style={styles.postBody}>{postView.post.body}</Text>
        )
      );
    };

    const PostFooter = () => {
      return (
        <View style={styles.postFooter}>
          <TouchableOpacity
            style={{
              backgroundColor: borderColor,
              borderRadius: 5,
              padding: 3,
              paddingLeft: 6,
              paddingRight: 6,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {postView.creator.avatar ? (
              <Image
                source={{ uri: postView.community.icon }}
                style={{ borderRadius: 5, width: 20, height: 20 }}
              />
            ) : (
              <Icon
                icon={"user"}
                color={textColor}
                size={18}
                style={{ marginBottom: 1.5 }}
              />
            )}
            <Text
              style={{
                fontSize: 18,
                marginLeft: 5,
              }}
            >
              {postView?.community.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: borderColor,
              borderRadius: 5,
              padding: 3,
              paddingLeft: 6,
              paddingRight: 6,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {postView.creator.avatar ? (
              <Image
                source={{ uri: postView.creator.avatar }}
                width={20}
                height={20}
                style={{ borderRadius: 5 }}
              />
            ) : (
              <Icon
                icon={"user"}
                color={textColor}
                size={18}
                style={{ marginBottom: 1.5 }}
              />
            )}
            <Text
              style={{
                fontSize: 18,
                marginLeft: 5,
              }}
            >
              {postView?.creator.name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    const PostButtons = () => {
      return type !== "post" ? (
        <></>
      ) : (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: borderColor,
              height: 50,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                icon={"arrow-up"}
                color={textColor}
                size={20}
                style={{ marginBottom: 1.5 }}
              />
              <Text style={{ fontSize: 23 }}>
                {postView.counts.upvotes < 1000
                  ? postView.counts.upvotes
                  : (postView.counts.upvotes / 1000).toFixed(1) + "K"}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                icon={"arrow-down"}
                color={textColor}
                size={20}
                style={{ marginBottom: 1.5 }}
              />
              <Text style={{ fontSize: 23 }}>{postView.counts.downvotes}</Text>
            </View>
            <Icon
              icon={"bookmark"}
              color={textColor}
              size={20}
              style={{ marginBottom: 1.5 }}
            />
            <Icon
              icon={"reply"}
              color={textColor}
              size={20}
              style={{ marginBottom: 1.5 }}
            />
            <Icon
              icon={"ellipsis"}
              color={textColor}
              size={20}
              style={{ marginBottom: 1.5 }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text style={{ fontSize: 18 }}>Sort By</Text>
            <Icon
              icon={"sort"}
              color={textColor}
              size={18}
              style={{ marginBottom: 1.5 }}
            />
          </View>
          <FeedSeparator />
        </>
      );
    };

    //todo show skeleton instead of null
    return postView ? (
      <>
        <PostTitle />
        <PostImage />
        <PostEmbedDescription />
        <PostBody />
        <PostFooter />
        <PostButtons />
      </>
    ) : null;
  },
  propsAreEqual,
);

const styles = StyleSheet.create({
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  postEmbedDescription: {
    fontSize: 16,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  postBody: {
    padding: 10,
    fontSize: 16,
  },
  postFooter: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 18,
  },
});

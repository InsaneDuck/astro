import { FeedSeparator } from "@/app/screens/Tabs/Feed/FeedSeparator";
import { CommunityButton } from "@/components/common/CommunityButton";
import { Icon } from "@/components/common/Icon";
import { PostActions } from "@/components/common/PostActions";
import { UserButton } from "@/components/common/UserButton";
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
import { Image, Pressable, StyleSheet } from "react-native";
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
//todo add post time,
export const PostViewComponent: FC<PostViewComponentProps> = React.memo(
  (props) => {
    const { postView, type } = props;
    const borderColor = useThemeColor("borderColor");
    const textColor = useThemeColor("text");
    const tabIconDefault = useThemeColor("tabIconDefault");
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
    const PostFooterLeft = () => {
      return <CommunityButton community={postView.community} />;
    };
    const PostFooterRight = () => {
      return <UserButton creator={postView.creator} />;
    };
    const PostFooter = () => {
      return (
        <View style={styles.postFooter}>
          <PostFooterLeft />
          <PostFooterRight />
        </View>
      );
    };

    const PostActions1 = () => {
      return type !== "post" ? (
        <></>
      ) : (
        <>
          <PostActions postAggregates={postView.counts} />
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
        <PostActions1 />
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

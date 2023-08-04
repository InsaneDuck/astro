import { formatTimeToDuration } from "@/api/helpers";
import { CommunityButton } from "@/components/app/Buttons/CommunityButton";
import { UserButton } from "@/components/app/Buttons/UserButton";
import { PostActions } from "@/components/app/PostActions";
import { Separator } from "@/components/app/Separator";
import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { MainStackNavigation } from "@/router/MainStackLayout";
import { FeedStackNavigation } from "@/router/tabs/FeedStackLayout";
import { feedActions } from "@/store/feed-slice";
import { imageActions } from "@/store/image-slice";
import { AppDispatch } from "@/store/store";

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
//todo add post time,
export const PostViewComponent: FC<PostViewComponentProps> = React.memo(
  (props) => {
    const { postView, type } = props;
    const borderColor = useThemeColor("borderColor");
    const textColor = useThemeColor("text");
    const tabIconDefault = useThemeColor("tabIconDefault");
    const navigation = useNavigation<MainStackNavigation>();
    const navigationCurrent = useNavigation<FeedStackNavigation>();
    const dispatch = useDispatch<AppDispatch>();
    const onImagePress = (): any => {
      if (postView.post?.thumbnail_url) {
        dispatch(
          imageActions.addImage({ image: [postView.post.thumbnail_url] }),
        );
        navigation.navigate("ImageViewer");
      }
    };

    const goToPost = useCallback((): any => {
      if (type === "feed") {
        postView && dispatch(feedActions.setCurrentPost(postView.post.id));
        navigationCurrent.navigate("Post");
      }
    }, [type, postView, dispatch, navigation]);

    //todo change shade of title after post is marked as read
    const PostTitle = () => {
      return (
        <Text onPress={goToPost} style={styles.postTitle}>
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
              style={{ width: "100%", height: 300, maxHeight: 400 }}
              source={{ uri: postView.post.thumbnail_url }}
              resizeMode="contain"
            />
          </Pressable>
        )
      );
    };

    //todo show any embed url
    const PostEmbedDescription = () => {
      return (
        postView.post.embed_description && (
          <Text onPress={goToPost} style={styles.postEmbedDescription}>
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
      return (
        <View style={styles.postFooterItems}>
          <Icon icon={"message"} color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18, marginRight: 3, marginLeft: 3 }}>
            {postView.counts.comments}
          </Text>
          <Icon icon={"clock"} color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18, marginLeft: 3 }}>
            {formatTimeToDuration(postView.post.published)}
          </Text>
        </View>
      );
    };
    const PostFooterRight = () => {
      return (
        <View style={styles.postFooterItems}>
          <Text style={{ fontSize: 18 }}>In </Text>
          <CommunityButton community={postView.community} />
          <Text style={{ fontSize: 18 }}> By </Text>
          <UserButton creator={postView.creator} />
        </View>
      );
    };

    const PostFooter = () => {
      return (
        <TouchableOpacity onPress={goToPost} style={styles.postFooter}>
          <PostFooterLeft />
          <PostFooterRight />
        </TouchableOpacity>
      );
    };

    const CommentSorter = () => {
      return (
        <>
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
            <Icon icon={"sort"} color={textColor} size={18} />
          </View>
          <Separator />
        </>
      );
    };

    const PostInteraction = () => {
      return type !== "post" ? (
        <></>
      ) : (
        <>
          <PostActions postAggregates={postView.counts} />
          <CommentSorter />
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
        <PostInteraction />
      </>
    ) : null;
  },
  propsAreEqual,
);

const styles = StyleSheet.create({
  postTitle: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 12,
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
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  postFooterItems: {
    paddingTop: 10,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
  },
});

import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { CommunityButton } from "@/app/components/Community/CommunityButton";
import { UserButton } from "@/app/components/Person/UserButton";
import { PostActions } from "@/app/components/Post/PostActions";
import { CustomImage } from "@/common/CustomImage";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { formatTimeToDuration } from "@/helper-functions/formatTimeToDuration";
import { MainStackNavigation } from "@/router/MainStackLayout";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
import { useThemeColor } from "@/theming/useThemeColor";

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
    const tabIconDefault = useThemeColor("tabIconDefault");
    const navigation = useNavigation<MainStackNavigation>();
    const navigationCurrent = useNavigation<SubStackNavigation>();
    const dispatch = useDispatch<AppDispatch>();
    const onImagePress = (): any => {
      if (postView.post?.thumbnail_url) {
        dispatch(sharedActions.setImages([postView.post.thumbnail_url]));
        navigation.navigate("ImageViewer");
      }
    };

    const goToPost = (): any => {
      if (type === "feed") {
        postView && dispatch(sharedActions.setPostView(postView));
        navigationCurrent.navigate("Post");
      }
    };

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
          <CustomImage
            onPress={onImagePress}
            style={{ width: "100%", height: 300, maxHeight: 400 }}
            source={{ uri: postView.post.thumbnail_url }}
            resizeMode="contain"
          />
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
          <Icon icon="message" color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18, marginRight: 3, marginLeft: 3 }}>
            {postView.counts.comments}
          </Text>
          <Icon icon="clock" color={tabIconDefault} size={16} />
          <Text style={{ fontSize: 18, marginLeft: 3, paddingRight: 10 }}>
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
          <UserButton person={postView.creator} />
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

    const PostInteraction = () => {
      return type !== "post" ? (
        <></>
      ) : (
        <>
          <PostActions postAggregates={postView.counts} />
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
    ) : (
      <></>
    );
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

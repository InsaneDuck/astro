import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { PostActions } from "@/app/components/Post/PostViewComponent/PostActions";
import { PostFooter } from "@/app/components/Post/PostViewComponent/PostFooter";
import { CustomImage } from "@/common/CustomImage";
import { Text } from "@/common/Text";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";

type PostViewComponentProps = {
  postView: PostView;
  type: "feed" | "post";
};
let count = 0;

/**
 *
 */
//todo add post time,
const PostViewComponent: FC<PostViewComponentProps> = (props) => {
  const { postView, type } = props;
  const navigationCurrent = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  console.log("count = ", count++);
  const goToPost = (): any => {
    if (type === "feed") {
      postView && dispatch(sharedActions.setPostView(postView));
      navigationCurrent.push("Post");
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
    return (
      type === "post" &&
      postView.post.body && (
        <Text style={styles.postBody}>{postView.post.body}</Text>
      )
    );
  };

  //todo show skeleton instead of null
  return postView ? (
    <>
      <PostTitle />
      <PostImage />
      <PostEmbedDescription />
      <PostBody />
      <PostFooter
        onPress={goToPost}
        published={postView.post.published}
        community={postView.community}
        aggregate={postView.counts}
        creator={postView.creator}
      />
      {type === "post" && <PostActions postAggregates={postView.counts} />}
    </>
  ) : (
    <></>
  );
};

const propsAreEqual = (
  prevProps: Readonly<PostViewComponentProps>,
  nextProps: Readonly<PostViewComponentProps>,
) => {
  return prevProps.postView.post.id === nextProps.postView.post.id;
};
// pure component for the sake of FlatList
export default React.memo(PostViewComponent, propsAreEqual);

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
});

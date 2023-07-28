import MinimalPostContent from "@/components/common/Cards/MinimalPostContent";
import Text from "@/components/theming/ThemedComponents/Text";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type FullPostContentProps = { postView: PostView };

const FullPostContent: FC<FullPostContentProps> = (props) => {
  const { postView } = props;
  //console.log("Rendering Post Content, count = ", ++count);
  //todo fix image
  return postView ? (
    <>
      <MinimalPostContent postView={postView} />
      {postView.post.body && (
        <Text
          style={{
            padding: 10,
            fontSize: 16,
          }}
        >
          {postView.post.body}
        </Text>
      )}
    </>
  ) : null;
};
const propsAreEqual = (
  previousProps: FullPostContentProps,
  currentProps: FullPostContentProps,
) => {
  return previousProps.postView.post.id == currentProps.postView.post.id;
};
export default React.memo(FullPostContent, propsAreEqual);
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

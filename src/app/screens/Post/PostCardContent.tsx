import { FeedCardContent } from "@/app/screens/Tabs/Feed/FeedCardContent";
import { Text } from "@/components/themed-components/Text";
import { PostView } from "lemmy-js-client";
import React, { FC } from "react";

type FullPostContentProps = { postView: PostView };
const propsAreEqual = (
  previousProps: FullPostContentProps,
  currentProps: FullPostContentProps,
) => {
  return previousProps.postView.post.id == currentProps.postView.post.id;
};
export const PostCardContent: FC<FullPostContentProps> = React.memo((props) => {
  const { postView } = props;
  //console.log("Rendering Post Content, count = ", ++count);
  //todo fix image
  return postView ? (
    <>
      <FeedCardContent postView={postView} />
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
}, propsAreEqual);

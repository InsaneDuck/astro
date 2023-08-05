import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { PostViewComponent } from "@/app/components/ViewComponents/PostViewComponent";
import { SwipeableCard } from "@/common/Cards/SwipeableCard";
import { Text } from "@/common/Text";
import { RootState } from "@/store/store";

type FeedCardProps = {
  postId: EntityId;
  index: number;
};
const propsAreEqual = (
  previousProps: FeedCardProps,
  currentProps: FeedCardProps,
) => {
  return previousProps.postId === currentProps.postId;
};
const count = 0;
export const FeedCard: FC<FeedCardProps> = React.memo((props) => {
  const post = useSelector(
    (state: RootState) =>
      state.feed.feedPosts?.entities[props.postId.toString()],
  );

  //console.log("Rendering Feed Card, count = ", ++count);
  return (
    <SwipeableCard>
      {post ? (
        <PostViewComponent postView={post} type="feed" />
      ) : (
        <Text>Loading</Text>
      )}
    </SwipeableCard>
  );
}, propsAreEqual);

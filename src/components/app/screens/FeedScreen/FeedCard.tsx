import { PostViewComponent } from "@/components/app/PostViewComponent";
import { SwipeableCard } from "@/components/common/Cards/SwipeableCard";
import { Text } from "@/components/common/Text";
import { RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useSelector } from "react-redux";

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
let count = 0;
export const FeedCard: FC<FeedCardProps> = React.memo((props) => {
  const post = useSelector(
    (state: RootState) =>
      state.feed.feedPosts?.entities[props.postId.toString()],
  );

  //console.log("Rendering Feed Card, count = ", ++count);
  return (
    <SwipeableCard>
      {post ? (
        <PostViewComponent postView={post} type={"feed"} />
      ) : (
        <Text>Loading</Text>
      )}
    </SwipeableCard>
  );
}, propsAreEqual);

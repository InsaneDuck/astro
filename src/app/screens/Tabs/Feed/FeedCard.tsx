import { MinimalPostContent } from "@/app/screens/Tabs/Feed/MinimalPostContent";
import { SwipeableCard } from "@/components/common/Cards/SwipeableCard";
import { Text } from "@/components/themed-components/Text";
import { NavigationRoutes, StackNavigation } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      state.feed.allPosts?.entities[props.postId.toString()],
  );
  //const post = posts?.entities[props.postId.toString()];
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch<AppDispatch>();

  const pressHandler = () => {
    post && dispatch(feedActions.setCurrentPost(post));
    navigation.navigate(NavigationRoutes.Post);
  };
  console.log("Rendering Feed Card, count = ", ++count);
  return (
    <SwipeableCard>
      {post ? (
        <MinimalPostContent postView={post} onTitlePress={pressHandler} />
      ) : (
        <Text>Loading</Text>
      )}
    </SwipeableCard>
  );
}, propsAreEqual);

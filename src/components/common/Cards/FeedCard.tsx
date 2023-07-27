import MinimalPostContent from "@/components/common/Cards/MinimalPostContent";
import Card from "@/components/common/Cards/SwipeableCard";
import Text from "@/components/theming/ThemedComponents/Text";
import { NavigationRoutes, StackNavigation } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useNavigation } from "@react-navigation/core";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC, memo } from "react";
import { GestureResponderEvent } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedCardProps = {
  postId: EntityId;
  index: number;
};
let count = 0;
const FeedCard: FC<FeedCardProps> = (props) => {
  const post = useSelector(
    (state: RootState) =>
      state.feed.allPosts?.entities[props.postId.toString()],
  );
  //const post = posts?.entities[props.postId.toString()];
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch<AppDispatch>();

  const pressHandler = (event: GestureResponderEvent) => {
    post && dispatch(feedActions.setCurrentPost(post));
    navigation.navigate(NavigationRoutes.Post);
  };
  console.log("Rendering Feed Card, count = ", ++count);
  return (
    <Card>
      {post ? (
        <MinimalPostContent postView={post} onTitlePress={pressHandler} />
      ) : (
        <Text>Loading</Text>
      )}
    </Card>
  );
};

const propsAreEqual = (
  previousProps: FeedCardProps,
  currentProps: FeedCardProps,
) => {
  return previousProps.postId === currentProps.postId;
};

export default memo(FeedCard, propsAreEqual);

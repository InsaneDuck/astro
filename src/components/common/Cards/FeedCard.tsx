import PostContent from "@/components/common/Cards/PostContent";
import Card from "@/components/common/Cards/SwipeableCard";
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
};

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

  return (
    <Card>
      {post && <PostContent post={post} onTitlePress={pressHandler} />}
    </Card>
  );
};

export default memo(FeedCard);

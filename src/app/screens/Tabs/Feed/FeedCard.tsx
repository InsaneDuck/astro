import { FeedCardContent } from "@/app/screens/Tabs/Feed/FeedCardContent";
import { SwipeableCard } from "@/components/common/Cards/SwipeableCard";
import { Text } from "@/components/themed-components/Text";
import { MainNavigation, MainRoutes } from "@/constants/Navigation";
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
  const navigation = useNavigation<MainNavigation>();
  const dispatch = useDispatch<AppDispatch>();

  const pressHandler = () => {
    post && dispatch(feedActions.setCurrentPost(post.post.id));
    navigation.navigate(MainRoutes.Post);
  };
  console.log("Rendering Feed Card, count = ", ++count);
  return (
    <SwipeableCard>
      {post ? (
        <FeedCardContent postView={post} onTitlePress={pressHandler} />
      ) : (
        <Text>Loading</Text>
      )}
    </SwipeableCard>
  );
}, propsAreEqual);

import PostContent from "@/components/common/Cards/PostContent";
import Card from "@/components/common/Cards/SwipeableCard";
import { NavigationRoutes, StackNavigation } from "@/constants/Navigation";
import { feedActions } from "@/store/feed-slice";
import { Optional } from "@/types/Optional";
import { useNavigation } from "@react-navigation/core";
import { PostView } from "lemmy-js-client";
import React, { FC, useState } from "react";
import { GestureResponderEvent } from "react-native";
import { useDispatch } from "react-redux";

type FeedCardProps = {
  post: Optional<PostView>;
};

const FeedCard: FC<FeedCardProps> = (props) => {
  const [postView, setPostView] = useState<Optional<PostView>>(props.post);
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch();

  const pressHandler = (event: GestureResponderEvent) => {
    dispatch(feedActions.setCurrentPost(postView));
    navigation.navigate(NavigationRoutes.Post);
  };

  return (
    <Card>
      <PostContent post={postView} onTitlePress={pressHandler} />
    </Card>
  );
};

export default FeedCard;

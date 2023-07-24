import FeedCard from "@/components/common/Cards/FeedCard";
import FeedSeparator from "@/components/common/FeedSeparator";
import View from "@/components/theming/ThemedComponents/View";
import { feedActions } from "@/store/feed-slice";
import { RootState } from "@/store/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LemmyHttp, PostView } from "lemmy-js-client";
import React, { FC, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Feed: FC<FeedProps> = (props) => {
  const feed = useSelector((state: RootState) => state.feed.items);
  const dispatch = useDispatch();

  useEffect(() => {
    get().then((data) => dispatch(feedActions.addPosts(data)));
  }, [dispatch]);
  //todo fix key here

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item, index) =>
          item.post?.id?.toString()
            ? item.post?.id?.toString()
            : index.toString()
        }
        renderItem={(item) => <FeedCard post={item.item} />}
        ItemSeparatorComponent={() => <FeedSeparator />}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const get = async () => {
  let baseUrl = "https://enterprise.lemmy.ml/";
  let client: LemmyHttp = new LemmyHttp(baseUrl, {});
  let data: PostView[] = [];
  await client.getPosts({ limit: 50 }).then((response) => {
    data = response.posts;
  });
  return data;
};

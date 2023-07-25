import FeedCard from "@/components/common/Cards/FeedCard";
import FeedSeparator from "@/components/common/FeedSeparator";
import View from "@/components/theming/ThemedComponents/View";
import { feedActions, fetchPosts } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LemmyHttp, PostView } from "lemmy-js-client";
import React, { FC, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type FeedProps = {
  navigation: NativeStackNavigationProp<any>;
};

const Feed: FC<FeedProps> = (props) => {
  // const [feed, setFeed] = useState<Optional<PostView>[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   setLoading(true);
  //   getPosts(page)
  //     .then((data) => setFeed((prevState) => [...prevState, ...data]))
  //     .then(() => setLoading(false));
  // }, [page]);
  const {
    allPosts: feed,
    loading,
    page,
    error,
  } = useSelector((state: RootState) => state.feed);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  const endOfLine = () => {
    dispatch(feedActions.nextPage());
    //setPage((prevState) => prevState + 1);
  };
  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" color="#000" /> : null;
  };

  //todo fix key here

  return (
    <View style={styles.container}>
      <FlatList
        data={feed && Array.from(feed.values())}
        keyExtractor={(item, index) =>
          item.post?.id?.toString()
            ? item.post?.id?.toString()
            : index.toString()
        }
        renderItem={(item) => <FeedCard post={item.item} />}
        ItemSeparatorComponent={() => <FeedSeparator />}
        onEndReachedThreshold={0.01}
        onEndReached={endOfLine}
        refreshing={loading}
        ListFooterComponent={renderFooter}
        bounces={false}
      />
    </View>
  );
};

export default Feed;

export const getPosts = async (page: number) => {
  let baseUrl = "https://lemmy.world/";
  let client: LemmyHttp = new LemmyHttp(baseUrl, {});
  let data: PostView[] = [];
  await client.getPosts({ limit: 50, page: page }).then((response) => {
    data = response.posts;
  });

  return data;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
